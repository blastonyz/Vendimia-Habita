import React from 'react';
import Image from 'next/image';

const Features = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline font-bold text-4xl text-white mb-4">Domine cada detalle</h2>
                    <p className="text-secondary">Un conjunto de herramientas creadas para el desarrollo, expansión y administración inteligente de proyectos vitivinícolas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* AI Assistant */}
                    <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl flex flex-col justify-between h-[450px] relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">psychology</span>
                            <h3 className="text-2xl font-bold text-white mb-4">Asistente de IA</h3>
                            <p className="text-secondary max-w-md">Consulte todo el historial de su activo o proyecto. &quot;¿Cuál es nuestro riesgo actual si el sistema de riego se retrasa 20 días?&quot; Obtenga información instantánea respaldada por datos.</p>
                        </div>
                        <div className="relative z-10 mt-8 bg-surface-container-lowest p-4 rounded-lg border border-outline-variant max-w-sm self-end translate-y-4 group-hover:translate-y-0 transition-transform">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                                <span className="text-[10px] text-primary-fixed uppercase font-bold tracking-widest">Análisis en Vivo</span>
                            </div>
                            <p className="text-xs text-secondary italic">&quot;La expansión del bloque sur del viñedo está un 11% por debajo del presupuesto. Recomendación: reasignar capital a riego inteligente y eficiencia operativa.&quot;</p>
                        </div>
                    </div>
                    {/* Smart Matching */}
                    <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between h-[450px]">
                        <div>
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">groups</span>
                            <h3 className="text-2xl font-bold text-white mb-4">Emparejamiento de Élite</h3>
                            <p className="text-secondary">Acceda a una red curada de especialistas del ecosistema vitivinícola: ingenieros agrónomos, operadores, expertos en riego, infraestructura, logística y desarrollo de bodegas, validados por datos de desempeño.</p>
                        </div>
                        <div className="flex -space-x-4">
                            {[
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuCzRaYhVvoHAeSASTp-1yS5uNoDXuDIi4o0RQGkiNHyEdqfV4gT41XTlbyuOJanGIyy-NvjTkw0KyomsgHuXyy6kbxjVEjdOHvPFo8aYfe1erZLlmPd7jxrZNvhRUiuHvLGdH1FhqIzRIrGzzfay7fwN3mlcuJKET0PhpfmLIbC_tY8_TI27-PU3jEFbKHTbIhJX6IEHwuChOX3F0OWOajSSJEwgFQYqCmrld8rBeTf-JtgUijY-Wkn9v9wTVqK2OKll0Qqb18yoHU",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuBnQmSJVDnqWCQjQ9qvhSfjhnmLXT1-IM1vNf6o1rDAzoR41Qdwvbaljna1YK46xZVzWUnyXlP1eAN4viBXcpjfbiXnSdTcrhS1EOQyygPAXagcWtV_Tbiw1A0xyxkZh-88eD91aubQ2iQHfTJUQQ1pZUQoYjXex13lRIGUCG9ZL5Bp2Mz8U8RG3t1w1BRX4DNGjEeLfJwqiFYbI6VKn-4m5bwv_IVgDoX29nBLKMnzsv83utay3peNd8z_aRqKEKMShSm88wzL-U8"
                            ].map((src, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-surface-container-high overflow-hidden relative">
                                    <Image src={src} alt="Team member" fill className="object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-surface-container-high bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs z-10">+42</div>
                        </div>
                    </div>
                    {/* Budgeting */}
                    <div className="bg-surface-container-high p-8 rounded-xl md:col-span-3 flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">monitoring</span>
                            <h3 className="text-2xl font-bold text-white mb-4">Presupuesto en Tiempo Real</h3>
                            <p className="text-secondary mb-6">Seguimiento visual de cada centavo. La previsión dinámica predice los costes finales basándose en las fluctuaciones actuales del mercado y la velocidad de la obra.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-surface-container-low p-4 rounded-lg">
                                    <span className="text-xs text-secondary uppercase tracking-widest block mb-1">Tasa de Gasto</span>
                                    <span className="text-xl font-bold text-white">$4.2k/día</span>
                                </div>
                                <div className="bg-surface-container-low p-4 rounded-lg">
                                    <span className="text-xs text-secondary uppercase tracking-widest block mb-1">Eficiencia</span>
                                    <span className="text-xl font-bold text-primary-fixed">+18.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-48 bg-surface-container-lowest rounded-lg border border-outline-variant p-6 flex items-end gap-2">
                            <div className="flex-1 bg-primary-fixed/20 h-1/2 rounded-t-sm hover:h-2/3 transition-all cursor-pointer"></div>
                            <div className="flex-1 bg-primary-fixed/30 h-2/3 rounded-t-sm hover:h-3/4 transition-all cursor-pointer"></div>
                            <div className="flex-1 bg-primary-fixed/40 h-1/3 rounded-t-sm hover:h-1/2 transition-all cursor-pointer"></div>
                            <div className="flex-1 bg-primary-fixed h-5/6 rounded-t-sm hover:h-full transition-all cursor-pointer"></div>
                            <div className="flex-1 bg-primary-fixed/60 h-2/3 rounded-t-sm hover:h-3/4 transition-all cursor-pointer"></div>
                            <div className="flex-1 bg-primary-fixed/30 h-1/2 rounded-t-sm hover:h-2/3 transition-all cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
