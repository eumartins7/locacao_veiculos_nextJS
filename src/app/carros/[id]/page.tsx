import { notFound } from "next/navigation";
import { HeaderCars } from "@/app/carros/components/pagina-carros/header-cars/headerCar";
import { CarPage } from "./components/layout/CarPageLayout";
import { Footer } from "@/feature/layout/footer/footer";
import { carDetails } from "@/feature/cars/data/carDetail";

export default function CarsDetails({ params }: { params: { id: string } }) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <>
      <HeaderCars />
      <CarPage carro={carro} />
      <Footer />
    </>
  );
}
