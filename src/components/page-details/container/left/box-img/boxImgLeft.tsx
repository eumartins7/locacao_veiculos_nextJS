import { notFound } from "next/navigation";
import { carDetails } from "../../../carDetail";
import Image from "next/image";
import { CarPageProps } from "../../../details-window/detailsWindow";

export function BoxImgLeft({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
      <div className="mt-10">
          <div className="flex justify-center flex-1 rounded-2xl md:mt-10 md:mr-10">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={carro.image}
                alt={`${carro.marca} ${carro.modelo}`}
                fill
                className="object-contain"
              />              
            </div>
          </div>
      </div>
  );
}
