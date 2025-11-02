import Link from "next/link"
import { CarButton } from "@/components/home/section-cars/button-card/buttonCars"
import { CardIMG } from "./card/cardImgs"

type CarProps = {
    brand:string,
    model:string,
    price:string,
    plan:string,
    image:string,
    id: string,
}

export function CardPageTwo({brand, model, price, plan, image, id}: CarProps) {
    return (
        <div>
            <div>
                <CardIMG 
                    image={image}
                    detail={`${brand} ${model}`}
                />
            </div>

            <div className="bg-white rounded-2xl text-center">
  
                <div className="flex gap-2 justify-center font-aboutCompany p-5 pt-10 text-2xl">
                    <h1>
                    {brand} 
                    </h1>
                    <p className="font-bold text-stone-800">
                        {model}
                    </p>
                </div>

                <div className="p-5">
                     <p className="font-bold text-xl">
                        {price}
                    </p>
                    <p className="text-gray-600 pt-5">
                        {plan}
                    </p>
                </div>

                <div className="p-2">
                    <Link href={`/cars/${id}`}>
                        <CarButton />
                    </Link>
                </div>
            </div> 
        </div>
    )
}