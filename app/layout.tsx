import type { Metadata } from "next";
import { manrope, inter } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinality | Inteligencia Vinícola",
  description: "Tu obra, sin sorpresas. Ordená tu proyecto con IA y contratos inteligentes.",
  openGraph: {
    title: "Vinality | Inteligencia Vinícola",
    description: "Tu obra, sin sorpresas. Ordená tu proyecto con IA y contratos inteligentes.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinality | Inteligencia Vinícola",
    description: "Tu obra, sin sorpresas. Ordená tu proyecto con IA y contratos inteligentes.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} font-body antialiased bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
