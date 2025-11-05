import Image from "next/image";
import Link from "next/link";

export function HeaderCars() {
  return (
    <header>
      <div className="flex bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] justify-between p-5 pl-3 pr-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-vehicle text-xl whitespace-nowrap font-bold md:text-3xl">
              Martins Locações
            </span>

            <Image
              src="/logo/logoICON.png"
              alt="Logo Martins Locações"
              width={120}
              height={120}
              priority
            />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="/">Início</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
