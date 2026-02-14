import Image from "next/image"

type CardsImgs = {
    image: string
    detail: string
}

export function ImgsCard({image, detail}: CardsImgs) {
    return (
        <div className="relative w-75 h-50">
            <Image 
            src={image} 
            alt={detail} 
            fill
            sizes="300px"
            className="object-contain mx-auto translate-y-10"
            />
        </div>
    )
}