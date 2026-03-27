'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ConnectWalletButton from './ConnectWalletButton';

const Header = () => {
    const [activeSection, setActiveSection] = useState('vision');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sectionIds = ['vision', 'plataforma', 'seguridad'];
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: 'vision', label: 'Visión', href: '#' },
        { id: 'plataforma', label: 'Plataforma', href: '#plataforma' },
        { id: 'seguridad', label: 'Seguridad', href: '#seguridad' }
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass-nav">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Vinality Logo" width={120} height={78} className="h-[78px] w-auto object-contain" priority />
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            className={`${activeSection === link.id
                                    ? 'text-[#c3f400] font-bold border-b-2 border-[#c3f400] pb-1'
                                    : 'text-[#c8c8b0] hover:text-white transition-colors'
                                } font-label text-sm uppercase tracking-widest cursor-pointer`}
                            href={link.href}
                            onClick={() => setActiveSection(link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
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
