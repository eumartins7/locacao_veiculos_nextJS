import { notFound } from "next/navigation";
import { carDetails } from "../../carDetail";
import { CarPageProps } from "../../details-window/detailsWindow";
import { BoxImgLeft } from "./box-img/boxImgLeft";
import { BoxSpecs } from "./box-specs/boxSpecs";


export function BoxLeft({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
        <div className="flex flex-col">

            <BoxImgLeft params={{ id: params.id }} />

            <div className="bg-white rounded-2xl mt-10 mb-10 mr-10">
                <BoxSpecs params={{ id: params.id }} />
            </div>
        </div>
  );
}