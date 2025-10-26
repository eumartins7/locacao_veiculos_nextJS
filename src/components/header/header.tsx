import Image from "next/image";


export function Header() {
    return (
        <header id="inicio">
            <div className="flex bg-linear-to-r from-amber-500 to-white justify-between p-5 pl-20 pr-20">
                <div className="flex items-center text-center">
                    <h1 className="font-vehicle text-3xl font-bold">Martins Locações</h1>
                    <Image
                    src='/logo/logoICON.png'
                    alt="Logo Martins Locações"
                    width={120}
                    height={120}
                    priority
                    />  
                </div>

                <nav>
                    <ul className="flex gap-3">
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#veiculos">Veículos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}