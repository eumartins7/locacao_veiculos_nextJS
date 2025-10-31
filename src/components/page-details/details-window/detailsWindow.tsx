import { notFound } from "next/navigation";
import { carDetails } from "../carDetail";
import Image from "next/image";
import { BotaoVendedor } from "@/components/layout/botao-vendedor/button";

type CarPageProps = {
  params: { id: string };
};

export function CarPage({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <main className="">
      <section className="bg-gray-200 mt-10 pl-20">
        <div className="flex">
          <div className="bg-white rounded-2xl mt-10 mb-10 mr-10">
            <Image 
              src={carro.image}
              alt={`${carro.marca} ${carro.modelo}`}
              width={1000}
              height={800}
            />
          </div>

          <div 
            className=" bg-white rounded-lg mt-10 mb-10 mr-10 pl-5 flex-1"
          >
            <div className="flex flex-col justify-center text-center text-3xl">
              <h1>
                {carro.marca} <b>{carro.modelo}</b>
              </h1>
              <div>
                <p>carro bom</p>
              </div>
            </div>

            <div className="w-[50%]">
              <hr className="text-gray-400"/>
            </div>

            <div>
              <p>
                A partir de: <br /> {carro.price}
              </p>
              <p>
                no plano de 1 mês
              </p>
            </div>

            <div className="w-[70%]">
              <BotaoVendedor />
            </div>
          </div>
        </div>
        
        
      </section>
    </main>
  );
}
