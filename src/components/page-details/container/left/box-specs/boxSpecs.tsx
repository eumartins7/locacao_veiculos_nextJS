
import { carDetails } from "@/components/page-details/carDetail";
import { CarPageProps } from "@/components/page-details/details-window/detailsWindow";
import Image from "next/image";

export function BoxSpecs({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  

  return (
    <div className=" mt-10 mb-10 mr-10 pl-5">
      <div className="flex-1 bg-white rounded-xl p-6 shadow-md mt-6">
        <div className="font-aboutCompany font-bold text-xl mb-5">
          <h1>Detalhes</h1>
        </div>
        <ul className="flex justify-around flex-wrap">
          <li className="flex items-center gap-2">
            <Image 
              src='/infos-car/gas-station.png'
              alt={String(carro?.fuel)}
              width={24}
              height={24}
            />
            <p className="font-aboutCompany font-medium text-stone-800">
              Combustível 
              <br />
              {carro?.fuel}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <Image 
              src='/infos-car/motor-de-carro.png'
              alt={String(carro?.power)}
              width={24}
              height={24}
            />            
            <p className="font-aboutCompany font-medium text-stone-800">
              Potência 
              <br />
              {carro?.power}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <Image 
              src='/infos-car/gearshift.png'
              alt={String(carro?.transmission)}
              width={24}
              height={24}
            />              
            <p className="font-aboutCompany font-medium text-stone-800">
              Câmbio 
              <br />
              {carro?.transmission}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <Image 
              src='/infos-car/door.png'
              alt={String(carro?.doors)}
              width={24}
              height={24}
            />              
            <p className="font-aboutCompany font-medium text-stone-800">
              Portas 
              <br />
              {carro?.doors}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}