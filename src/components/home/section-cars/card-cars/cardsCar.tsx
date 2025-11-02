import { CarButton } from "../button-card/buttonCars"



type InfosCarProps = {
    brand: string,
    model: string,
    description: string,
    description2: string,
    price: string,
    plan: string,
}

export function CarsCard({brand, model, price, plan}: InfosCarProps) {
    return (
        <div className="bg-white rounded-2xl">
            <div className="p-5 pt-10 text-2xl">
                <h1>
                    {brand} <strong>{model}</strong>
                </h1>
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
                <div className="p-2">
                        <CarButton />
                </div>
            </div>
            
        </div>
    )
}