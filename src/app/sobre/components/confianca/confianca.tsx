import Image from "next/image";
import { DataConfianca } from "./data/data";
import { CardConfianca } from "./confiancaCard/confiancaCard";

export function Confianca() {
  return (
    <section className="py-15 px-5">
      <div className=" max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-[#ff400036] inline-block p-3 rounded-full">
            <Image
              src="/PageSobre/confianca/security.svg"
              alt="icone de escudo"
              width={34}
              height={34}
            />
          </div>
          <div>
            <h2 className="text-2xl text-center font-bold">
              Sua Confiança é Nossa Prioridade
            </h2>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Na Martins Locações, sabemos que alugar um veículo exige
              confiança. Por isso, atuamos com total transparência em nossos
              processos, padrões rigorosos de segurança e qualidade em cada
              interação. Não alugamos apenas veículos — construímos
              relacionamentos baseados em confiabilidade, honestidade e respeito
              mútuo.
            </p>
          </div>

          <div className="md:flex md:gap-5">
            {DataConfianca.map((item) => (
              <CardConfianca
                key={item.id}
                img={item.img}
                alt={item.alt}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
