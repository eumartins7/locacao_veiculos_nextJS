import { DataValores } from "./data/data";
import { ValorCard } from "./valoresCard/valoresCard";

export function Valores() {
  return (
    <section className="bg-zinc-100 px-5 py-15">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Missão, Visão e Valores</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-15">
          {DataValores.map((item) => (
            <ValorCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
