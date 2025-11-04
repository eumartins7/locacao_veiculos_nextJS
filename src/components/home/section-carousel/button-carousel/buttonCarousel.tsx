import Image from "next/image";

type BotaoCarouselProps = {
    prev: () => void
    next: () => void
}

export function BotaoCarousel({prev, next}: BotaoCarouselProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            <div onClick={prev} className="cursor-pointer">
                <Image
                    src='/carousel/arrow_circle_left.svg'
                    alt="Voltar Slide"
                    width={20}
                    height={20}
                />
            </div>
            <div onClick={next} className="cursor-pointer">
                <Image
                    src='/carousel/arrow_circle_right.svg'
                    alt="Próximo Slide"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}