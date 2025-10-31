import { carDetails } from "@/components/page-details/carDetail"
import { CardPageTwo } from "./pageCar-card/card"


export function AllCars() {
    return (
        <section id="topo" className="bg-gray-200 mt-10">
            <div className=" flex flex-col  p-10">
                <div className="font-vehicle text-center text-5xl">
                    <h1>Confira nossos veículos!</h1>
                </div>

                <div className="flex justify-center flex-wrap gap-6 p-5">
                    {carDetails.map((car, index) =>(
                        <CardPageTwo 
                            key={index}
                            id={car.id}
                            brand={car.marca}
                            model={car.modelo}
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