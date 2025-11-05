import Image from "next/image";

type BotaoCarouselProps = {
    prev: () => void
    next: () => void
}

export function BotaoCarousel({prev, next}: BotaoCarouselProps) {
    return (
        <div className="hidden md:flex absolute inset-0 items-center justify-between px-4 z-20">
            <div onClick={prev} className="hidden cursor-pointer">
                <Image
                    src='/carousel/arrow_circle_left.svg'
                    alt="Voltar Slide"
                    width={20}
                    height={20}
                />
            </div>
            <div onClick={next} className="hidden cursor-pointer">
                <Image
                    src='/carousel/arrow_circle_right.svg'
                    alt="Próximo Slide"
                    width={20}
                    height={20}
                />
            </div>
                
            <div onClick={next} className="md:flex">
                <Image
                    src='/carousel/arrow_circle_left.svg'
                    alt="Próximo Slide"
                    width={50}
                    height={50}
                />
            </div>
            <div onClick={prev} className="md:flex">
                <Image
                    src='/carousel/arrow_circle_right.svg'
                    alt="Próximo Slide"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}