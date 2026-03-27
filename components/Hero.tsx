import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[795px] flex items-center justify-center overflow-hidden px-6" id="vision">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDapLjMYlDCf6hcjLGpKCpmAvpJO54SQByXJfj42vW6COEaTN3WmVwhydMFpcbst2Mf-xyhSBeosNtGdzSAdhtNT7qGcVfymLKRJzCqb3PAyHBfB__6gAOYAQXMVc5Sw6CmqHIGpF3h6C3IL-edNXF9LoFHURx_IfkTsXjHhUE8Jd_5epn7Ze00bv6oDtV3QZsFJALmKlqJ6tblCGNV1PKuTN7UwQunAhiU-BC5clrohXCK0LiLE7zcACHIpA_ra9nwl_9Q1TzdRhM"
                    alt="Arquitectura Moderna"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>
            <div className="relative z-20 max-w-5xl text-center">
                <span className="inline-block py-1 px-4 rounded-full bg-surface-container-high border border-outline-variant text-primary-fixed font-label text-xs tracking-[0.2em] uppercase mb-8">
                    El Curador Digital
                </span>
                <h1 className="font-headline font-extrabold text-5xl md:text-8xl tracking-tight text-white mb-8 leading-[1.1]">
                    Tu obra, <br />
                    <span className="text-primary-fixed text-glow italic">sin sorpresas</span>
                </h1>
                <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
                    Elimine la complejidad del desarrollo vitivinícola. Vinality combina gestión de proyectos impulsada por IA, una red curada de especialistas del ecosistema vitivinícola y administración segura de activos para viñedos, bodegas e infraestructura productiva.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-primary-fixed text-on-primary-fixed px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        Empezar <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="bg-surface-container-highest/50 backdrop-blur-md border border-outline-variant text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-bright transition-all">
                        Ver demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
