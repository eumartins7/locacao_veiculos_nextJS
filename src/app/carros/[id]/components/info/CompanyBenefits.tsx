import Image from "next/image";
import { EmpresaVantagem } from "../data/AboutCompany";

export function CompanyBenefits() {
  return (
    <div className="bg-white rounded-xl p-6 mt-6 border border-zinc-300">
      <div className="font-aboutCompany font-bold text-xl">
        <h1>Vantagens de alugar com nós</h1>
      </div>

      <div className=" mt-3 mb-3">
        <hr className="text-gray-400" />
      </div>

      <div className="font-aboutCompany font-medium text-lg text-stone-800">
        <div className="flex flex-col gap-4">
          {EmpresaVantagem.map((item) => (
            <div className="flex items-center gap-2">
              <Image src={item.img} alt={item.alt} width={24} height={24} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
