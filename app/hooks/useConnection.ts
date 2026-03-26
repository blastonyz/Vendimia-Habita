'use client';

import { useAccount, useDisconnect } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export function useConnection() {
    const { address, isConnected, isConnecting } = useAccount();
    const { disconnect } = useDisconnect();
    const { openConnectModal } = useConnectModal();

    const connect = () => {
        openConnectModal?.();
    };

    const shortAddress = address
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : undefined;

    return {
        address,
        shortAddress,
        isConnected,
        isConnecting,
        connect,
        disconnect,
    };
}
