import { notFound } from "next/navigation";
import { carDetails } from "../../carDetail";
import { CarPageProps } from "../../details-window/detailsWindow";
import { BoxAboutCar } from "./box-about-car/boxAboutCar";
import { BoxAboutCompany } from "./box-about-company/boxAboutCompany";

export function BoxRight({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <div className="">
      <div className="bg-gray-200 mt-10">
        <div className="flex flex-col">
            <div className="bg-white rounded-2xl mt-10 mr-10">
              <BoxAboutCar params={{ id: params.id }} />
            </div>

            <div className="bg-white rounded-2xl mt-10 mr-10">
                <BoxAboutCompany params={{ id: params.id }} />
            </div>
        </div>
      </div>
    </div>
  );
}