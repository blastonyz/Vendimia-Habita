'use client';

import React from 'react';
import ConnectWalletButton from './ConnectWalletButton';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 glass-nav">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-2xl">architecture</span>
                    <span className="text-xl font-extrabold tracking-tighter text-white font-headline">HABITA</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-[#c3f400] font-bold border-b-2 border-[#c3f400] pb-1 font-label text-sm uppercase tracking-widest" href="#">Visión</a>
                    <a className="text-[#c8c8b0] hover:text-white transition-colors font-label text-sm uppercase tracking-widest" href="#plataforma">Plataforma</a>
                    <a className="text-[#c8c8b0] hover:text-white transition-colors font-label text-sm uppercase tracking-widest" href="#seguridad">Seguridad</a>
                    <ConnectWalletButton />
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <ConnectWalletButton />
                    <button className="text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
