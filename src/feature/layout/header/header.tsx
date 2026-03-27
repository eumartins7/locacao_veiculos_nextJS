import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    // Tornamos o header absoluto e transparente para ele "sentar" em cima do banner
    <header
      id="inicio"
      className="fixed top-0 left-0 w-full z-50 transition-all"
    >
      {/* - bg-black/20 com backdrop-blur-md cria o efeito de vidro.
          - h-20 fixa uma altura elegante sem ser exagerada.
      */}
      <div className="flex bg-black/10 backdrop-blur-lg border-b border-white/10 justify-between items-center px-6 md:px-10 h-20">
        <Link href="/">
          <div className="flex items-center gap-4 group">
            {/* Logo redimensionado para caber harmonicamente no header */}
            <div className="relative w-24 h-24 md:w-48 md:h-48 overflow-hidden">
              <Image
                src="/logo/logo.png"
                alt="Logo Martins Locações"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>

            {/* Texto com tipografia mais moderna e cores que conversam com o logo */}
            <div className="flex flex-col leading-tight">
              <h1 className="font-vehicle text-lg md:text-2xl font-bold text-white tracking-tight">
                Martins <span className="text-[#FF4100]">Locações</span>
              </h1>
              <span className="text-[10px] md:text-xs text-[#FF4100] uppercase tracking-[0.2em] font-medium">
                Feito para você
              </span>
            </div>
          </div>
        </Link>

        {/* Adicionei um Menu Simples para não parecer vazio no Desktop */}
        <nav className="hidden md:flex gap-8 items-center text-white font-medium text-sm">
          <Link
            href="#veiculos"
            className="hover:text-[#FF4100] transition-colors"
          >
            Veículos
          </Link>
          <Link
            href="#sobre"
            className="hover:text-[#FF4100] transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#contato"
            className="px-5 py-2 bg-[#FF4100] rounded-full hover:bg-[#e63a00] transition-all shadow-lg shadow-orange-900/20"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
