export function BotaoVendedor({ modelo, marca }: { modelo: string, marca: string }) {
    const href = `https://wa.me/5512988372717?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o ${marca} ${modelo}`)}`

    return (
        <div>
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-aboutCompany text-white text-bold text-lg bg-amber-700 hover:bg-amber-600 p-2 pl-20 pr-20 rounded-xl cursor-pointer"
            >
                Fale com um vendedor
            </a>
        </div>
    )
}