import { BoxDetalhes } from "./detalhes";
import { Car } from "@/feature/cars/types/car";
import { Breadcrumbs } from "@/feature/layout/bread-crumbs/Breadcrumbs";

interface CarPageProps {
  carro: Car;
}

export function CarPage({ carro }: CarPageProps) {
  return (
    <main className="bg-gray-100 pb-10 pt-20">
      {/* Centralizador principal */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="m-8">
          <Breadcrumbs />
        </div>
        <BoxDetalhes carro={carro} />
      </div>
    </main>
  );
}
