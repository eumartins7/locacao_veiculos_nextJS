import Link from "next/link"

export function ButtonPage() {
    return (
        <div className="w-[100%] bg-[#FF4100] hover:bg-[#FF6000] text-white p-1 pl-3 pr-3 m-4 rounded-xl cursor-pointer md:w-[50%] font-aboutCompany font-bold">
        <Link href="/cars">
            <span>Ver todos os carros</span>
        </Link>
            
        </div>
    )
}