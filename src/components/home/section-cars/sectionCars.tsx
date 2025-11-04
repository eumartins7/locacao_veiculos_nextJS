import { ButtonPage } from "./button-page/buttonPage";
import { CardPageTwo } from "@/components/pagina-carros/todos-carros/pageCar-card/card";
import { carDetails } from "@/components/page-details/carDetail";
import Image from "next/image";

export function CarsSection() {
    return (
        <section id="veiculos" className="bg-gray-200 w-full">
            <div className="mt-10 pt-20 pb-20 lg:ml-20 lg:mr-20">
                
                <div className="flex justify-center whitespace-nowrap font-vehicle text-2xl md:text-5xl">
                    <h1>Confira alguns veículos!</h1>
                </div>

                <div
                  className="
                    flex gap-6 py-4
                    pl-3 pr-3 
                    overflow-x-auto
                    overflow-y-visible
                    snap-x snap-mandatory
                    overscroll-x-contain
                    scrollbar-width-none
                    [&::-webkit-scrollbar]:hidden
                    [-webkit-overflow-scrolling:touch]
                    lg:flex lg:justify-between  lg:overflow-x-auto 
                  "
                >
                    {carDetails
                        .filter((_, index) => index < 5)
                        .map(car => (
                            <div className="snap-center flex-none min-w-[260px] lg:w-auto" key={car.id}>
                                <CardPageTwo
                                    id={car.id}
                                    brand={car.marca}
                                    model={car.modelo}
                                    price={car.price}
                                    plan={car.plan}
                                    image={car.image}
                                />
                            </div>
                        ))}
                </div>

                <div className="font-aboutCompany font-bold flex gap-2 justify-center lg:invisible">
                    <span>Arraste </span>
                    <Image
                        src='/icons/arraste.svg'
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>

                <div className="flex justify-center text-center mt-10">
                    <ButtonPage />
                </div>

            </div>
        </section>
    )
}