import { CardAbout } from "./components/card-services/cardServices";
import { ServiceData } from "./components/servicesData/servicesData";

export function Service() {
  return (
    <section
      id="sobre"
      // Aumentei o padding vertical (py) para a seção "respirar" dentro do fundo cinza.
      // Substituí my-10 por mt-12 mb-12 para maior controle de separação.
      className="bg-gray-200 py-16 md:py-24 my-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between lg:gap-16">
        {/* Lado do Título: Alinhamento à esquerda no desktop fica mais moderno que centralizado */}
        <div className="flex flex-col text-center lg:text-left font-service text-3xl md:text-4xl lg:text-5xl lg:w-[40%] leading-tight">
          <h2 className="text-gray-800 tracking-tight">
            Por que escolher <br className="hidden lg:block" /> nossos serviços?
          </h2>
          {/* Opcional: Uma barrinha decorativa abaixo do título ajuda na hierarquia */}
          <div className="w-20 h-1 bg-[#FF4100] mt-4 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Lado dos Cards: Grid mais robusto */}
        <div className="pt-12 lg:pt-0 lg:w-[60%]">
          <div className="grid gap-6 sm:grid-cols-2">
            {ServiceData.map((item) => (
              <CardAbout
                key={item.id}
                image={item.image}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
