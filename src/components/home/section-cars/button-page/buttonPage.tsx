import Link from "next/link"

export function ButtonPage() {
    return (
        <div className="w-[100%] border border-amber-600 hover:bg-amber-600 hover:text-white p-1 pl-3 pr-3 m-4 rounded-xl cursor-pointer md:w-[50%]">
        <Link href="/cars">
            <span>Ver todos os carros</span>
        </Link>
            
        </div>
    )
}