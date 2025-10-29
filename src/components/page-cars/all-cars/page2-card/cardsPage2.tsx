import { CarButton } from "./page2-button/buttonCard"
import { CardIMG } from "./page2-imgs/cardImgs"

type CarProps = {
    brand:string,
    model:string,
    price:string,
    plan:string,
    image:string,
}

export function CardPageTwo({brand, model, price, plan, image}: CarProps) {
    return (
        <div>
            <div>
                <CardIMG 
                    image={image}
                    detail={`${brand} ${model}`}
                />
            </div>

            <div className="bg-white rounded-2xl text-center">
  
                <div className="p-5 pt-10 text-2xl">
                    <h1>
                    {brand} <strong>{model}</strong>
                    </h1>
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
                    <CarButton />
                </div>
            
            </div> 
        </div>
    )
}