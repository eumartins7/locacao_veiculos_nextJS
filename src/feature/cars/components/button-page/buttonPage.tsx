import Link from "next/link"

export function ButtonPage() {
    return (
        <div className=" bg-[#FF4100] hover:bg-[#dd3700] text-white p-2 m-4 rounded-md cursor-pointer font-bold text-lg">
        <Link href="/carros">
            <span>Ver todos os carros</span>
        </Link>
            
        </div>
    )
}