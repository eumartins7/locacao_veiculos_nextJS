import Image from "next/image";
import Link from "next/link";

export function HeaderCars() {
  return (
    <header>
      <div className="flex bg-[#FF4100] p-5 pl-3 pr-3">
        <div className="flex items-center lg:px-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-vehicle text-xl whitespace-nowrap text-black font-bold md:text-3xl">
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
      </div>
    </header>
  );
}
