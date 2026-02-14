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
    <section id="veiculos" className="bg-gray-200 -mt-px lg:mt-10">
      <div className="max-w-7xl mx-auto py-15">
        <div className="flex justify-center whitespace-nowrap font-vehicle text-2xl md:text-5xl">
          <h2>Confira alguns veículos!</h2>
        </div>

        <CarCarrossel cars={carDetails.slice(0, 5)} />

        <div className="font-aboutCompany font-bold flex gap-2 justify-center lg:invisible">
          <span>Arraste </span>
          <Image src="/icons/arraste.svg" alt="" width={24} height={24} />
        </div>

        <div className="flex justify-center text-center mt-10">
          <ButtonPage />
        </div>
      </div>
    </section>
  );
}
