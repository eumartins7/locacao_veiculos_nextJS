import Image from "next/image";


export function Header() {
    return (
        <header>
            <div className="flex bg-linear-to-r from-amber-500 to-white justify-between p-5 pl-20 pr-20">
                <div className="flex items-center text-center">
                    <h1 className="font-sans text-3xl font-bold">Martins Locações</h1>
                    <Image
                    src='/logo/logo2.png'
                    alt="Logo Martins Locações"
                    width={120}
                    height={120}
                    priority
                    />  
                </div>

                <div>
                    <ul className="flex gap-3">
                        <li>Início</li>
                        <li>Sobre Nós</li>
                        <li>Veículos</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}