import React from 'react';

const AppPreview = () => {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-8">El Centro de Mando en tu Bolsillo</h2>
                    <p className="text-secondary text-lg mb-8">Todo, desde anotaciones en planos hasta liberaciones de depósitos, ocurre en una interfaz intuitiva. Diseñado para la obra y el consejo de administración.</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                            <span className="text-white">Verificación de Hitos mediante IA Fotográfica</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                            <span className="text-white">Pagos Inteligentes Directos a Proveedores</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                            <span className="text-white">Redacción Colaborativa de Planos</span>
                        </li>
                    </ul>
                </div>
                <div className="relative flex justify-center">
                    <div className="w-[300px] h-[600px] bg-[#000] rounded-[3rem] border-[8px] border-surface-container-highest shadow-2xl relative overflow-hidden">
                        {/* App Mockup Content */}
                        <div className="bg-surface-container-low h-full flex flex-col p-6 pt-12">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-secondary uppercase font-label">Proyecto Activo</span>
                                    <span className="text-sm font-bold text-white">The Glass House</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary-fixed/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary-fixed text-xs">notifications</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-highest rounded-xl p-4 mb-4">
                                <span className="text-[10px] text-secondary">FINALIZACIÓN DEL PROYECTO</span>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xl font-bold text-white">68%</span>
                                    <span className="text-[10px] text-primary-fixed">En Cronograma</span>
                                </div>
                                <div className="h-1 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-fixed w-[68%]"></div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] text-secondary uppercase">Tareas Recientes</span>
                                <div className="bg-surface-container-high p-3 rounded-lg flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary-fixed text-lg">verified</span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white font-bold">Instalación de Riego Completada</span>
                                        <span className="text-[8px] text-secondary">Aprobado por Inspector 12:45</span>
                                    </div>
                                </div>
                                <div className="bg-surface-container-high p-3 rounded-lg flex items-center gap-3 opacity-50">
                                    <span className="material-symbols-outlined text-secondary text-lg">pending</span>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white font-bold"	>Entrega de Equipamiento</span>
                                        <span className="text-[8px] text-secondary">Llegada Estimada: Mañana</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPreview;
