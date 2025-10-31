import { HeaderCars } from "@/components/pagina-carros/header-cars/headerCar";
import { CarPage } from "@/components/page-details/details-window/detailsWindow";

export default async function CarsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <HeaderCars />
      <CarPage params={{ id }} />
    </>
  );
}
