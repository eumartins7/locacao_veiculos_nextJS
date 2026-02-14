import { BoxImg } from "../media/CarImage";
import { BoxSpecs } from "../info/CarSpecs";
import { BoxAboutCar } from "../info/CarAbout";
import { CompanyBenefits } from "../info/CompanyBenefits";
import { Car } from "@/feature/cars/types/car";
import { getCarSpecs } from "../data/SpecsCar";

interface BoxLeftProps {
  carro: Car;
}

export function BoxDetalhes({ carro }: BoxLeftProps) {
  const specs = getCarSpecs(carro);
  return (
    <div className="grid grid-cols-1 gap-6 pt-10">
      <div className="flex flex-col gap-6">
        <div className="w-full md:w-1/2 self-center">
          <BoxImg carro={carro} />
        </div>

        <div className="w-full">
          <BoxAboutCar carro={carro} />
          <BoxSpecs specs={specs} />
          <CompanyBenefits />
        </div>
      </div>
    </div>
  );
}
