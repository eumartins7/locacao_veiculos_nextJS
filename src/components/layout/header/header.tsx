import Image from "next/image";


export function Header() {
    return (
        <header id="inicio">
            <div className="flex bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] justify-between whitespace-nowrap pl-3 pr-3">
                <div className="flex items-center text-center">
                    <h1 className="font-vehicle text-xl md:text-3xl font-bold md:p-3">Martins Locações</h1>
                    <Image
                    src='/logo/logoICON.png'
                    alt="Logo Martins Locações"
                    width={120}
                    height={120}
                    priority
                    />  
                </div>

                <nav className="invisible md:visible md:flex md:pr-3">
                    <ul className="md:flex md:gap-3">
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#veiculos">Veículos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}