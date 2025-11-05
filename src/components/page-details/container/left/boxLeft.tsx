import { CarPageProps } from "@/components/page-details/details-window/detailsWindow";
import { BoxImgLeft } from "./box-img/boxImgLeft";
import { BoxSpecs } from "./box-specs/boxSpecs";
import { BoxAboutCar } from "../right/box-about-car/boxAboutCar";
import { BoxAboutCompany } from "../right/box-about-company/boxAboutCompany";

export function BoxLeft({ params }: CarPageProps) {

  return (
    <div className="flex flex-col gap-5">

      {/* MOBILE → imagem + infos do carro juntas */}
      <div className="md:hidden bg-white rounded-2xl">
        <BoxImgLeft params={params} />
        <BoxAboutCar params={params} />
      </div>

      {/* DESKTOP → só imagem */}
      <div className="hidden md:block bg-white rounded-2xl">
        <BoxImgLeft params={params} />
      </div>

      {/* DESKTOP → specs */}
      <div className="hidden md:block bg-white rounded-2xl">
        <BoxSpecs params={params} />
      </div>

      {/* MOBILE → aboutCompany */}
      <div className="md:hidden bg-white rounded-2xl mb-5">
        <BoxAboutCompany params={params} />
      </div>

    </div>
  );
}
