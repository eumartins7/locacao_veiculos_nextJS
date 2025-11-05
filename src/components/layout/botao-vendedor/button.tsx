export function BotaoVendedor({ modelo, marca }: { modelo: string, marca: string }) {
    const href = `https://wa.me/5512988372717?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o ${marca} ${modelo}`)}`

    return (
        <div>
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                font-aboutCompany
                text-white text-bold 
                text-lg
                bg-amber-700 
                hover:bg-amber-600 
                px-6 py-3
                md:pl-5 md:pr-5
                md:px-20 
                md:text-xl
                lg:pl-20 lg:pr-20
                lg:px-24
                rounded-xl cursor-pointer
                inline-block
                "
            >
                Fale com um vendedor
            </a>
        </div>
    )
}