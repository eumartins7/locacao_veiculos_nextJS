import { Car } from "@/feature/cars/types/car";
import { SpecItem } from "@/feature/cars/types/spec";

export function getCarSpecs(carro: Car): SpecItem[] {
  return [
    {
      img: "/infos-car/velocimetro.svg",
      alt: "icone Motor",
      title: "Potência",
      description: carro.power,
    },
    {
      img: "/infos-car/gearshift.svg",
      alt: "icone Transmissão",
      title: "Transmissão",
      description: carro.transmission,
    },
    {
      img: "/infos-car/assets.svg",
      alt: "icone Assentos",
      title: "Lugares",
      description: `${carro.assets}`,
    },
    {
      img: "/infos-car/combustivel.svg",
      alt: "icone Combustível",
      title: "Combustível",
      description: carro.fuel,
    },
  ];
}
