import Image from "next/image"

export function ChatWidget() {
    return (
        <div className="fixed shadow-2xl bottom-7 right-6 z-[999] transition delay-150 duration-300 ease-in-out bg-stone-700 hover:bg-black hover:-translate-y-2 hover:-translate-x-1 text-white rounded-lg">
            <div className="flex text-center text-lg items-center gap-2 p-2">
                <a 
                    href="https://wa.me/5512988372717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                    >
                    <Image 
                        src='/icons/message.png'
                        alt="icone de conversa"
                        width={25}
                        height={15}
                    />
                    <span>Converse com um vendedor</span>
                </a>
            </div>
        </div>
    )
}