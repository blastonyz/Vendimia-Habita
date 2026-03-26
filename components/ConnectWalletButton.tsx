'use client';

import React from 'react';
import { useConnection } from '@/app/hooks/useConnection';

export default function ConnectWalletButton() {
    const { shortAddress, isConnected, isConnecting, connect, disconnect } = useConnection();

    if (isConnecting) {
        return (
            <button
                disabled
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm
                   bg-surface-container-high text-on-surface-variant cursor-wait
                   transition-all duration-300"
            >
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Connecting...</span>
            </button>
        );
    }

    if (isConnected && shortAddress) {
        return (
            <div className="flex items-center gap-2">
                {/* Address pill */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full
                        bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30
                        transition-all duration-300">
                    {/* Green pulse dot */}
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-60" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-fixed" />
                    </span>
                    <span className="text-sm font-semibold text-on-surface font-label tracking-wide">
                        {shortAddress}
                    </span>
                </div>

                {/* Disconnect button */}
                <button
                    onClick={() => disconnect()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold
                     bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/20
                     text-on-surface-variant hover:text-error hover:border-error/40
                     hover:bg-error/10 transition-all duration-300 cursor-pointer
                     active:scale-95"
                >
                    <span className="material-symbols-outlined text-base" style={{ fontSize: '16px' }}>
                        logout
                    </span>
                    <span className="hidden sm:inline">Disconnect</span>
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={connect}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm
                 bg-primary-fixed text-on-primary-fixed
                 hover:scale-[1.03] active:scale-95 transition-all duration-300
                 shadow-[0_0_20px_rgba(195,244,0,0.15)] hover:shadow-[0_0_30px_rgba(195,244,0,0.3)]
                 cursor-pointer"
        >
            <span
                className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-12"
                style={{ fontSize: '18px' }}
            >
                account_balance_wallet
            </span>
            <span>Connect Wallet</span>
        </button>
    );
}
