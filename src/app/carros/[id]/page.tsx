import { notFound } from "next/navigation";
import { CarPage } from "./components/layout/CarPageLayout";
import { Footer } from "@/feature/layout/footer/footer";
import { carDetails } from "@/feature/cars/data/carDetail";
import { Header } from "@/feature/layout/header/header";

export default function CarsDetails({ params }: { params: { id: string } }) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <>
      <Header />
      <CarPage carro={carro} />
      <Footer />
    </>
  );
}
