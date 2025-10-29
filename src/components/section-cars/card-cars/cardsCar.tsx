import { CarButton } from "../button-card/buttonCars"


type InfosCarProps = {
    brand: string
    model: string
    description: string
    description2: string
    price: string
    plan: string
}

export function CarsCard({brand, model, description, description2, price, plan}: InfosCarProps) {
    return (
        <div className="bg-white rounded-2xl">
            <div className="p-5 pt-10 text-2xl">
                <h1>
                    {brand} <strong>{model}</strong>
                </h1>
            </div>
            
            <div className=" bg-gray-200 rounded-2xl m-3 p-4">
                 <p>
                    {description}
                    
                </p>
                <p>
                    {description2}
                </p>
            </div>

            <div className="p-5">
                <p className="font-bold text-xl">
                    {price}
                </p>
            </div>
            
            <div>
                <p>
                {plan}
                </p>
            </div>

            <div>
                <CarButton />
            </div>
            
        </div>
    )
}