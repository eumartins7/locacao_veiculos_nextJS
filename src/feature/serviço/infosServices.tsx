import { CardAbout } from "./components/card-services/cardServices";
import { ServiceData } from "./components/servicesData/servicesData";

export function Service() {
  return (
    <section
      id="sobre"
      className="bg-gray-200 py-20 mt-10 "
    >
      <div className="max-w-7xl mx-auto px-3 lg:flex lg:gap-10 items-center">
        <div className="flex justify-center gap-2 font-service text-3xl lg:text-5xl">
          <h2>
            Por que escolher <br className="invisible lg:flex" /> nossos
            serviços?
          </h2>
        </div>

        <div className="flex justify-center pt-10 lg:w-[50%]">
          <div className="grid gap-6 lg:grid-cols-2 ">
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
