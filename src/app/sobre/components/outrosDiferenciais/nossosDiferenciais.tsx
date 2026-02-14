import { DataDiferenciais } from "./data/data";
import { DiferenciaisCard } from "./diferenciaisCard/diferenciasCard";

export function NossosDiferenciais() {
  return (
    <section className="px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold ">Nossos Diferenciais</h2>
          <p className="pt-5 text-gray-600">
            O que torna a Martins Locações a escolha certa para a sua mobilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-10">
          {DataDiferenciais.map((item) => (
            <DiferenciaisCard
              key={item.id}
              img={item.img}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
