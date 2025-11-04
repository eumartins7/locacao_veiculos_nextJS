import Image from "next/image"

export function ChatWidget() {
    return (
        <div className=" whitespace-nowrap fixed shadow-2xl bottom-3 right-2 z-[999] transition delay-150 duration-300 ease-in-out bg-stone-700 hover:bg-black hover:-translate-y-2 hover:-translate-x-1 text-white rounded-lg">
            <div className="flex text-center text-sm items-center gap-2 p-2">
                <a 
                    href="https://wa.me/5512988372717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                    >
                    <Image 
                        src='/icons/chat.svg'
                        alt="icone de conversa"
                        width={16}
                        height={16}
                    />
                    <span>Converse com um vendedor</span>
                </a>
            </div>
        </div>
    )
}