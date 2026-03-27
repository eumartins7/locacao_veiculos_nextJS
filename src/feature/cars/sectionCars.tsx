"use client";

import { ButtonPage } from "./components/button-page/buttonPage";
import { CarCarrossel } from "./components/carrossel/carrosselCar";
import { carDetails } from "@/feature/cars/data/carDetail";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarsSection() {
  return (
    <section id="veiculos" className="bg-gray-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título: Aumentei o mb (margin-bottom) para o carrossel não "grudar" no texto */}
        <div className="flex justify-center text-center font-vehicle text-3xl md:text-5xl mb-12 md:mb-16">
          <h2 className="tracking-tight text-gray-800">
            Confira alguns veículos!
          </h2>
        </div>

        {/* Carrossel: Adicionei uma margem negativa ou padding para compensar as sombras dos cards se houver */}
        <div className="relative pb-8">
          <CarCarrossel cars={carDetails.slice(0, 5)} />
        </div>

        {/* Indicador de Arraste: Mudei invisible para hidden no desktop para não ocupar espaço fantasma */}
        <div className="font-aboutCompany font-bold flex items-center gap-2 justify-center mt-6 text-gray-600 lg:hidden">
          <span className="text-sm uppercase tracking-widest">Arraste</span>
          <Image
            src="/icons/arraste.svg"
            alt="Ícone de deslizar"
            width={20}
            height={20}
            className="animate-pulse" // Um pulso leve ajuda o usuário a entender a ação
          />
        </div>

        {/* Botão: Aumentei o espaçamento superior para dar destaque à chamada de ação (CTA) */}
        <div className="flex justify-center text-center mt-12 md:mt-20">
          <div className="hover:scale-105 transition-transform duration-300">
            <ButtonPage />
          </div>
        </div>
      </div>
    </section>
  );
}
