import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-primary-fixed text-on-primary-fixed" id="lista-espera">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"></rect>
                </svg>
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-on-primary-fixed text-primary-fixed font-bold text-xs uppercase tracking-widest mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
                    </span>
                    Cupos Limitados • Acceso Prioritario
                </div>
                <h2 className="font-headline font-extrabold text-4xl md:text-6xl mb-8">Construye tu legado con Habita</h2>
                <p className="text-on-primary-fixed/80 text-lg mb-12 max-w-xl mx-auto">Únete a la lista de espera exclusiva para la plataforma que está redefiniendo cómo el mundo construye. Lanzamiento de cohortes limitadas en el Q4 2026.</p>
                <div className="bg-on-primary-fixed/5 backdrop-blur-sm p-8 rounded-3xl border border-on-primary-fixed/20 max-w-2xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        <div className="bg-on-primary-fixed p-4 rounded-xl">
                            <span className="block text-3xl font-bold text-primary-fixed">12</span>
                            <span className="text-[10px] uppercase font-bold text-primary-fixed/60">Días</span>
                        </div>
                        <div className="bg-on-primary-fixed p-4 rounded-xl">
                            <span className="block text-3xl font-bold text-primary-fixed">08</span>
                            <span className="text-[10px] uppercase font-bold text-primary-fixed/60">Horas</span>
                        </div>
                        <div className="bg-on-primary-fixed p-4 rounded-xl">
                            <span className="block text-3xl font-bold text-primary-fixed">42</span>
                            <span className="text-[10px] uppercase font-bold text-primary-fixed/60">Cupos</span>
                        </div>
                    </div>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            className="flex-1 rounded-full bg-white text-on-primary-fixed placeholder:text-on-primary-fixed/50 px-6 py-4 border-none focus:ring-2 focus:ring-on-primary-fixed focus:outline-hidden"
                            placeholder="Tu correo electrónico profesional"
                            type="email"
                            required
                        />
                        <button className="bg-on-primary-fixed text-primary-fixed px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest hover:text-white transition-all shadow-xl whitespace-nowrap">
                            Solicitar Invitación
                        </button>
                    </form>
                    <p className="text-[10px] text-on-primary-fixed/60 mt-4 uppercase font-medium tracking-tighter">Acceso sujeto a validación de perfil profesional</p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
