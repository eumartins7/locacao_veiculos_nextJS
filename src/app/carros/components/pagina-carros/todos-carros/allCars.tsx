import { carDetails } from "@/feature/cars/data/carDetail";
import { CardPageTwo } from "./pageCar-card/card";

export function AllCars() {
  return (
    <section id="topo" className="bg-gray-100 pb-20 pt-40 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center md:mb-16">
          <h1 className="font-vehicle text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Confira nossos veículos!
          </h1>
          {/* Linha decorativa laranja para manter a identidade visual */}
          <div className="w-24 h-1 bg-[#FF4100] mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {carDetails.map((car, index) => (
            <div key={index} className="w-full flex justify-center">
              <CardPageTwo
                id={car.id}
                brand={car.marca}
                model={car.modelo}
                price={car.price}
                plan={car.plan}
                image={car.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
