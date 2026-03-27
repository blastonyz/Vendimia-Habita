import React from 'react';

const Trust = () => {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-headline font-bold text-3xl text-white mb-16">La Red de Élite</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl">apartment</span>
                        <span className="text-xs font-bold tracking-widest uppercase">Andes Vineyard Lab</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl">foundation</span>
                        <span className="text-xs font-bold tracking-widest uppercase">Terra Firm</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
                        <span className="text-xs font-bold tracking-widest uppercase">Barrel Precision Group</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl">castle</span>
                        <span className="text-xs font-bold tracking-widest uppercase">Reserva Infrastructure</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
