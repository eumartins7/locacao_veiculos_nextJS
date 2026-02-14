import Image from "next/image";
import { SpecItem } from "@/feature/cars/types/spec";

type BoxSpecsProps = {
  specs: SpecItem[];
};

export function BoxSpecs({ specs }: BoxSpecsProps) {
  return (
    <div className="md:mt-10 md:mb-10 md:mr-10 md:px-5 md:w-full">
      <div className="bg-white rounded-xl p-6 mt-6 border border-zinc-300">
        <h1 className="font-bold text-xl mb-5 md:text-2xl">Detalhes</h1>

        <div className="flex flex-col gap-5">
          {specs.map((spec) => (
            <div key={spec.title} className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-xl">
                <Image src={spec.img} alt={spec.alt} width={24} height={24} />
              </div>

              <div>
                <strong>{spec.title}</strong>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
