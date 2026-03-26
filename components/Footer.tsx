import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-surface w-full border-t border-[#c8c8b0]/10">
            <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
                <div className="flex flex-col items-center md:items-start transition-all">
                    <Image src="/logo.png" alt="Vinality Logo" width={40} height={40} className="mb-4 rounded-lg object-contain" />
                    <p className="font-label text-sm tracking-wide text-[#c8c8b0] text-center md:text-left">© 2026 Vinality. Inteligencia Vinícola.</p>
                </div>
                <div className="flex gap-8">
                    <a className="font-label text-sm tracking-wide text-[#c8c8b0] hover:text-[#c3f400] transition-colors" href="#">Plataforma</a>
                    <a className="font-label text-sm tracking-wide text-[#c8c8b0] hover:text-[#c3f400] transition-colors" href="#">Visión</a>
                    <a className="font-label text-sm tracking-wide text-[#c8c8b0] hover:text-[#c3f400] transition-colors" href="#">Seguridad</a>
                    <a className="font-label text-sm tracking-wide text-[#c8c8b0] hover:text-[#c3f400] transition-colors" href="#">Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
