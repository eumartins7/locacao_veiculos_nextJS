import { CardProblema } from "./cardProblema/cardProblema";
import { DataCard } from "./data/data";

export function Problema() {
  return (
    <section className="mt-10 px-5 bg-zinc-100 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">O Problema que Resolvemos</h2>
            <p className="pt-4 text-gray-600">
              Entendemos os desafios que você enfrenta quando precisa de um
              veículo
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {DataCard.map((item) => (
              <CardProblema
                key={item.id}
                img={item.img}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="bg-[#FF4100] mt-10 p-4 text-white font-semibold text-lg md:text-2xl text-center rounded-xl">
          <p>
            Simplificamos o processo de locação e oferecemos total
            tranquilidade, para que você possa focar no que realmente importa.
          </p>
        </div>
      </div>
    </section>
  );
}
