import Link from "next/link"

export function ButtonPage() {
    return (
        <div className=" bg-[#FF4100] hover:bg-[#dd3700] text-white p-1 pl-3 pr-3 m-4 rounded-md cursor-pointer md:w-[50%] font-bold">
        <Link href="/carros">
            <span>Ver todos os carros</span>
        </Link>
            
        </div>
    )
}