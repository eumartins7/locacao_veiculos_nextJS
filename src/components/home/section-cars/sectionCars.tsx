import { ButtonPage } from "./button-page/buttonPage";
import { CardPageTwo } from "@/components/pagina-carros/todos-carros/pageCar-card/card";
import { carDetails } from "@/components/page-details/carDetail";



export function CarsSection() {
    return (
        <section id="veiculos" className="bg-gray-200 w-full">
            <div className=" mt-10 pt-20 pb-20 pl-20 pr-20">
                <div className="font-vehicle text-center text-5xl">
                    <h1>Confira alguns veículos!</h1>
                </div>

                <div className=" flex justify-around text-center items-center">
                    {carDetails
                        .filter((_, index) => index < 5) // filtra só os 5 primeiros
                        .map(car => (
                            <CardPageTwo
                                key={car.id}
                                id={car.id}
                                brand={car.marca}
                                model={car.modelo}
                                price={car.price}
                                plan={car.plan}
                                image={car.image}
                            />
                    ))}
                </div>

                <div className="flex justify-center text-center mt-10">
                    <ButtonPage />
                </div>
            </div>
        </section>
    )
}