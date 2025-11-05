
import { carDetails } from "@/components/page-details/carDetail";
import { CarPageProps } from "@/components/page-details/details-window/detailsWindow";
import Image from "next/image";

export function BoxSpecs({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  

  return (
    <div className=" md:font-aboutCompany md:mt-10 md:mb-10 md:mr-10 md:pl-5 md:pr-5 md:w-full">
      <div className="flex-1 bg-white rounded-xl p-6 shadow-md mt-6">
        <div className=" font-bold text-xl mb-5 md:text-3xl">
          <h1>Detalhes</h1>
        </div>

        <div className="flex justify-around text-sm md:text-xl">
          <div className="flex gap-2">
            <Image 
              src="/infos-car/car-engine.svg"
              alt='Icone de motor'
              width={30}
              height={30}
            />
            <div>
              <p>Potência</p>
              <p>{carro?.power}</p>            
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Image 
              src="/infos-car/transmissao.svg"
              alt='Icone de marcha'
              width={30}
              height={30}
            />
            <div>
              <p>Transmissão</p>
              <p>{carro?.transmission}</p>            
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Image 
              src="/infos-car/gas-station.svg"
              alt='Icone de combustível'
              width={30}
              height={30}
            />
            <div>
              <p>Combustível</p>
              <p>{carro?.fuel}</p>            
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}