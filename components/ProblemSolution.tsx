import React from 'react';
import Image from 'next/image';

const ProblemSolution = () => {
    return (
        <section className="py-24 px-6 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZAKl0pvEqIN99DG6SKkVcX-jQVkFQMp-TEWlsBcjDRovQ4LwQKoqywp94Rl1VhtgxNIZv5fNBoiUpGyuCwjx3OxCFyrxOdRtWcpLkTGMPX_BIOMtO2zzJIvMfok5slgQyAjlOrpJ787m6tbd-3M0Fnc9YUXcyuLcS8mC9DSBwBsreb1lvS28ltT7F2CTgexG36hNLCWvgE2vcYCy7eOJJIeJWSwytX5jlQ5elNlDdxgNnA1eJUkiw7yvoVPDmuuQ9OVNgpzQ31w"
                                alt="Detalle de Construcción"
                                fill
                                className="object-cover grayscale brightness-50"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-primary-fixed p-8 rounded-lg max-w-xs hidden md:block z-20">
                            <p className="text-on-primary-fixed font-headline font-bold text-xl leading-tight">
                                La orquestación por IA reduce los retrasos en un 42%.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-primary-fixed font-label text-sm tracking-widest uppercase mb-4 block">La Solución</span>
                        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
                            La obra se cae en los detalles. <br />Ahí es donde intervenimos.
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary-fixed">terminal</span>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Supervisión Algorítmica</h4>
                                    <p className="text-secondary">Nuestra IA analiza planes, presupuestos, contratos y etapas críticas para detectar inconsistencias antes de que se conviertan en sobrecostos, demoras o riesgos operativos en proyectos vitivinícolas.		</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary-fixed">account_balance</span>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Garantía Inmutable</h4>
                                    <p className="text-secondary">Los contratos inteligentes retienen el dinero y solo liberan cada pago cuando el avance de obra está verificado, para proteger tanto al cliente como al equipo técnico.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
