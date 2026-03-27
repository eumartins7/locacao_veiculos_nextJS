import { BoxDetalhes } from "./detalhes";
import { Car } from "@/feature/cars/types/car";

interface CarPageProps {
  carro: Car;
}

export function CarPage({ carro }: CarPageProps) {
  return (
    <main className="bg-gray-100 pb-10 pt-20">
      {/* Centralizador principal */}
      <div className="max-w-7xl mx-auto px-5">
        <BoxDetalhes carro={carro} />
      </div>
    </main>
  );
}
