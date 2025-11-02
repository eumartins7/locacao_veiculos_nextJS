import { notFound } from "next/navigation";
import { carDetails } from "@/components/page-details/carDetail";
import { CarPageProps } from "@/components/page-details/details-window/detailsWindow";
import Image from "next/image";

export function BoxAboutCompany({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <div className="mt-10 mb-10 mr-10 pl-5">
      <div className="font-aboutCompany font-bold text-xl">
        <h1>Vantagens de alugar com nós</h1>
      </div>

        <div className="w-[70%] mt-3 mb-3">
            <hr className="text-gray-400" />
        </div>
        
      <div className="font-aboutCompany font-medium text-lg text-stone-800">
        <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <Image 
                src='/icons/chat.svg'
                alt=""
                width={24}
                height={24}
              />
              Atendimento rápido e humanizado
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src='/icons/doc.svg'
                alt=""
                width={24}
                height={24}
              />             
              Sem burocracia
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src='/icons/tel.svg'
                alt=""
                width={24}
                height={24}
              />
              Assistência 24 horas
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src='/icons/build.svg'
                alt=""
                width={24}
                height={24}
              />
              Veículos revisados
            </li>
        </ul>
      </div>
    </div>
  );
}