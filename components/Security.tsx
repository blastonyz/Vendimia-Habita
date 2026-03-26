import React from 'react';

const Security = () => {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest border-y border-outline-variant/30" id="seguridad">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-primary-fixed font-label text-sm tracking-widest uppercase mb-4 block">Confianza Inquebrantable</span>
                        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">Pagos y documentación que no dependen solo de la confianza</h2>
                        <p className="text-secondary text-lg mb-8">Cada etapa de la obra queda respaldada con evidencia digital y pagos custodiados por contratos inteligentes. Si el hito no se cumple, el dinero no se libera.</p>
                        <div className="grid gap-6">
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">payments</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Pagos Seguros en Escrow</h4>
                                    <p className="text-secondary text-sm">El cliente deposita una sola vez. Los fondos quedan bloqueados en un contrato inteligente y se liberan por etapas, según el avance validado.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">history_edu</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Contratos Inteligentes</h4>
                                    <p className="text-secondary text-sm">Las reglas se programan de antemano: quién cobra, cuándo y por qué. Menos discusiones, más claridad.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-6 rounded-xl bg-surface-container-high border border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary-fixed">verified_user</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Verificación de Identidad</h4>
                                    <p className="text-secondary text-sm">Profesionales y empresas pasan por validaciones de identidad y antecedentes dentro de la red Habita para reducir el riesgo de estafas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative bg-surface-container-high p-1 rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
                            <div className="bg-background rounded-xl p-8 flex flex-col items-center justify-center text-center py-20">
                                <div className="w-24 h-24 bg-primary-fixed/20 rounded-full flex items-center justify-center mb-6 relative">
                                    <span className="material-symbols-outlined text-primary-fixed text-5xl">shield_with_heart</span>
                                    <div className="absolute inset-0 rounded-full border-2 border-primary-fixed animate-ping opacity-20"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Protocolo Habita Vault</h3>
                                <p className="text-secondary text-sm mb-6 max-w-xs">Transparencia absoluta en cada transacción y resguardo inmutable de los documentos de obra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
