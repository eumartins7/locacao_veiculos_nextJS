import { carDetails } from "@/components/page-details/carDetail"
import { CardPageTwo } from "./pageCar-card/card"


export function AllCars() {
    return (
        <section id="topo" className="bg-gray-200 p-10">
            <div className="flex flex-col gap-5 pr-5 pl-5 md:flex md:flex-col md: md:p-10">
                <div className="flex justify-center whitespace-nowrap pt-10 text-2xl font-vehicle text-center md:text-3xl">
                    <h1>Confira nossos veículos!</h1>
                </div>

                <div className="md:flex md:justify-center md:flex-wrap md:gap-6">
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