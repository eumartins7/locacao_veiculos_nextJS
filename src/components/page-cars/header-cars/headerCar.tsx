import Image from "next/image";
import Link from "next/link";


export function HeaderCars() {
    return (
        <header>
            <div className="flex bg-gradient-to-r from-amber-500 to-white justify-between p-5 pl-20 pr-20">
                <div className="flex items-center">
                    <Link 
                        href='/' 
                        className="flex items-center gap-3">
                        <span 
                            className="font-vehicle text-3xl font-bold">
                            Martins Locações
                        </span> 

                        <Image
                            src='/logo/logoICON.png'
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
                            <Link href='/'>
                                Início
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}