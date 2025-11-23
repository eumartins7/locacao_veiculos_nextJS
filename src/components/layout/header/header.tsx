import Image from "next/image";


export function Header() {
    return (
        <header id="inicio">
            <div className="flex bg-[#FF4100] justify-between whitespace-nowrap pr-3 md:px-20 ">
                <div className="flex items-center text-center pl-3">
                    <h1 className="font-vehicle text-xl md:text-3xl font-bold text-black">
                        Martins Locações
                    </h1>
                    <Image
                    src='/logo/logo.png'
                    alt="Logo Martins Locações"
                    width={150}
                    height={150}
                    priority
                    />  
                </div>

                <nav className="hidden md:visible md:flex md:text-center md:items-center">
                    <ul className="md:flex md:text-stone-900 md:gap-3 md:font-aboutCompany md:font-bold">
                        <li className="lg:hover:underline"><a href="#sobre">Sobre Nós</a></li>
                        <li className="lg:hover:underline"><a href="#veiculos">Veículos</a></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}