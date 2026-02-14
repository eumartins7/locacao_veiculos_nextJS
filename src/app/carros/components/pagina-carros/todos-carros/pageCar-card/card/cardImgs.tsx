import Image from "next/image"

type CardsImgs = {
    image: string
    detail: string
}

export function CardIMG({image, detail}: CardsImgs) {
    return (
        <div className="w-full flex justify-center">
            <Image 
                src={image} 
                alt={detail}
                width={260}
                height={160}
                className="object-contain pointer-events-none select-none translate-y-13"
                draggable={false}
            />
        </div>
    )
}