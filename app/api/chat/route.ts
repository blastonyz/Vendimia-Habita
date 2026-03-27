import { NextResponse } from 'next/server';
import { SessionsClient } from '@google-cloud/dialogflow';

export async function POST(request: Request) {
    try {
        const { message, sessionId } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const projectId = process.env.DIALOGFLOW_PROJECT_ID;
        const clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;
        let privateKey = process.env.DIALOGFLOW_PRIVATE_KEY;

        if (privateKey) {
            // Remove potential quotes and handle both escaped (\n) and literal newlines
            privateKey = privateKey.trim().replace(/^["']|["']$/g, '');
            privateKey = privateKey.replace(/\\n/g, '\n');
        }

        if (!projectId || !clientEmail || !privateKey) {
            console.error('Missing Dialogflow environment variables');
            return NextResponse.json({
                fulfillmentText: "El asistente no está configurado correctamente. Por favor, completa las credenciales en .env.local."
            });
        }

        if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
            return NextResponse.json({
                fulfillmentText: "Error: El formato de la Private Key es incorrecto. Debe comenzar con '-----BEGIN PRIVATE KEY-----'."
            });
        }

        // Return informational message when using placeholder credentials
        if (projectId === 'your-project-id') {
            return NextResponse.json({
                fulfillmentText: "Conexión con Dialogflow detectada. Configura tus credenciales reales en .env.local para activar las respuestas dinámicas de tu agente."
            });
        }

        const sessionClient = new SessionsClient({
            credentials: { client_email: clientEmail, private_key: privateKey },
            projectId,
        });

        const sessionPath = sessionClient.projectAgentSessionPath(
            projectId,
            sessionId || 'default-session'
        );

        const dialogflowRequest = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'es-ES',
                },
            },
        };

        const [response] = await sessionClient.detectIntent(dialogflowRequest);
        const result = response.queryResult;

        return NextResponse.json({
            fulfillmentText: result?.fulfillmentText || "No entendí eso, ¿puedes repetirlo?"
        });

    } catch (error: any) {
        console.error('Dialogflow API Error Detail:', error);

        // Check for specific Dialogflow errors to return meaningful messages
        let errorMessage = "Ocurrió un error interno en el servidor.";
        if (error.code === 7 || error.message?.includes('permission')) {
            errorMessage = "Error de permisos en Dialogflow. Revisa tu Client Email y Private Key.";
        } else if (error.code === 5 || error.message?.includes('not found')) {
            errorMessage = "No se encontró el proyecto. Revisa tu Project ID.";
        } else if (error.message?.includes('invalid')) {
            errorMessage = "La Private Key tiene un formato inválido. Asegúrate de que empiece con '-----BEGIN PRIVATE KEY-----'.";
        } else if (error.message?.includes('Cannot find module')) {
            errorMessage = "No se encontró el SDK de Dialogflow. Asegúrate de haber instalado '@google-cloud/dialogflow'.";
        }

        return NextResponse.json({
            fulfillmentText: `Error: ${errorMessage}`,
            error: error.message
        }, { status: 500 });
    }
}
