'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const generateSessionId = () => 'session-' + Math.random().toString(36).substring(2, 10);

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "¡Hola! Soy el asistente de Vinality. ¿En qué puedo ayudarte con tu proyecto?",
            sender: 'ai'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const sessionIdRef = useRef<string>(generateSessionId());
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            inputRef.current?.focus();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue;
        setInputValue('');
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionIdRef.current
                }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, {
                text: data.fulfillmentText || "Lo siento, no pude procesar tu mensaje.",
                sender: 'ai'
            }]);
        } catch {
            setMessages(prev => [...prev, { text: "Error de conexión. Intenta de nuevo.", sender: 'ai' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Panel */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] flex flex-col rounded-2xl border border-white/10 bg-[rgba(19,19,19,0.85)] backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                style={{ height: isOpen ? '480px' : '0' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface-container-high border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-primary-fixed text-lg">smart_toy</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#c3f400] rounded-full border-2 border-surface-container-high"></div>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Vinality Assistant</p>
                            <p className="text-[10px] text-primary-fixed uppercase tracking-widest font-bold">En línea</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">close</span>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'ai' && (
                                <div className="w-6 h-6 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0 mr-2 mt-1">
                                    <span className="material-symbols-outlined text-primary-fixed text-sm">psychology</span>
                                </div>
                            )}
                            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-surface-container-highest text-on-surface rounded-tr-none border border-outline-variant'
                                    : 'bg-white/5 text-secondary rounded-tl-none border border-white/10'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary-fixed/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary-fixed/50 text-sm">psychology</span>
                            </div>
                            <div className="flex gap-1 px-4 py-2.5 bg-white/5 rounded-2xl rounded-tl-none border border-white/10">
                                <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                <div className="w-1.5 h-1.5 bg-primary-fixed/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 border-t border-white/10 bg-surface-container-high shrink-0">
                    <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            disabled={isLoading}
                            className="flex-1 bg-surface-container-lowest rounded-full px-4 py-2 border border-outline-variant text-white text-sm focus:outline-none focus:border-primary-fixed transition-colors placeholder:text-secondary/30"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed hover:bg-primary-fixed-dim transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating Button */}
            <button
                id="chat-widget-toggle"
                onClick={() => setIsOpen(prev => !prev)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shadow-lg hover:bg-primary-fixed-dim hover:scale-110 transition-all duration-200 group"
                aria-label="Abrir asistente"
            >
                <span
                    className={`material-symbols-outlined text-2xl transition-all duration-200 ${isOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'
                        }`}
                >
                    forum
                </span>
                <span
                    className={`material-symbols-outlined text-2xl transition-all duration-200 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'
                        }`}
                >
                    close
                </span>
                {/* Pulse ring when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-primary-fixed animate-ping opacity-20"></span>
                )}
            </button>
        </>
    );
};

export default ChatWidget;
