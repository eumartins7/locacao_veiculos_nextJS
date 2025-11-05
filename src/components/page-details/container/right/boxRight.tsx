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
    <div className="flex flex-col gap-5 w-full">

      <div className="bg-white rounded-2xl p-5">
        <BoxAboutCar params={params} />
      </div>

      <div className="bg-white rounded-2xl p-5">
        <BoxAboutCompany params={params} />
      </div>

    </div>
  );
}