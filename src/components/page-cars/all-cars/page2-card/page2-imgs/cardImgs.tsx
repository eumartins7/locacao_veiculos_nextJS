import Image from "next/image"

type CardsImgs = {
    image: string
    detail: string
}

export function CardIMG({image, detail}: CardsImgs) {
    return (
        <div className="relative w-[300px] h-[200px]">
            <Image 
            src={image} 
            alt={detail} 
            fill
            sizes="300px"
            className="object-contain mx-auto translate-y-13"
            />
        </div>
    )
}