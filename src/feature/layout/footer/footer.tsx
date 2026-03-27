import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#FF4100] text-white px-5">
      <div className="max-w-7xl mx-auto">
        <div className=" grid gap-4 md:grid-cols-3 pt-14">
          <div>
            <span className="text-2xl font-bold">Martins Locações</span>

            <p className="text-sm pt-2">
              Soluções completas em locação de veículos <br /> com qualidade,
              segurança e atendimento personalizado para sua jornada.
            </p>
          </div>

          <div className="md:justify-self-center pt-4 md:pt-0">
            <nav>
              <span className="text-lg font-bold">Navegação</span>
              <ul className="pt-2 flex flex-col gap-1 font-medium">
                <li>
                  <Link href="/#home" className="hover:underline transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#veiculos"
                    className="hover:underline transition"
                  >
                    Veículos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:underline transition">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/#contato" className="hover:underline transition">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:justify-self-center pt-4 md:pt-0">
            <span className="text-lg font-bold">Redes Sociais</span>
            <div className="pt-3">
              <a
                href="https://www.instagram.com/eumartins.7/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5c26] hover:bg-[#ff6532] inline-block rounded-full"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-7 md:flex md:flex-col">
            <div className=" h-px bg-linear-to-r from-transparent via-white to-transparent"></div>
          </div>

          <div className="flex justify-center pt-5 pb-5">
            <span className="text-xs">
              © 2025 Martins Locações — Todos os direitos reservados
            </span>
          </div>

          <div className="text-xs lg:w-full lg:flex lg:items-center lg:justify-center lg:text-center lg:pb-5">
            <p>
              Desenvolvido por{" "}
              <a href="#" className="hover:underline font-bold text-black">
                gbmartins.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
