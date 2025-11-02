import { notFound } from "next/navigation";
import { carDetails } from "@/components/page-details/carDetail";
import { CarPageProps } from "@/components/page-details/details-window/detailsWindow";
import { BotaoVendedor } from "@/components/layout/botao-vendedor/button";

export function BoxAboutCar({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col">
            <div className="bg-white rounded-2xl">
                <div 
                    className=" mt-10 mb-10 mr-10 pl-5 ">
                    <div className="text-3xl">
                        <h1>
                            {carro.marca} <b>{carro.modelo}</b>
                        </h1>

                        <div>
                            <p>carro bom</p>
                        </div>
                    </div>
                
                    <div className="w-[70%] mt-3 mb-3">
                        <hr className="text-gray-400"/>
                    </div>
                
                    <div>
                        <p>
                            A partir de: <br /> {carro.price}
                        </p>
                        <p>
                            no plano de 1 mês
                        </p>
                    </div>
                
                    <div className="flex flex-1 justify-center mt-5">
                        <BotaoVendedor />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}