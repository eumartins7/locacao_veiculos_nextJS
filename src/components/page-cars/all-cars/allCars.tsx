import { cars } from "../car-data/carData"
import { CardPageTwo } from "./page2-card/cardsPage2"


export function AllCars() {
    return (
        <section id="topo" className="bg-gray-200 mt-10">
            <div className=" flex flex-col  p-10">
                <div className="font-vehicle text-center text-5xl">
                    <h1>Confira nossos veículos!</h1>
                </div>

                <div className="flex justify-center flex-wrap gap-6 p-5">
                    {cars.map((car, index) =>(
                        <CardPageTwo 
                            key={index}
                            brand={car.brand}
                            model={car.model}
                            price={car.price}
                            plan={car.plan}
                            image={car.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}