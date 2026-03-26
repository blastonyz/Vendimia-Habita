'use client';

import { Web3Provider } from './context/ConnectionProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return <Web3Provider>{children}</Web3Provider>;
}
