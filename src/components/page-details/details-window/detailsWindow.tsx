import { notFound } from "next/navigation";
import { carDetails } from "../carDetail";
import { BoxLeft } from "../container/left/boxLeft";
import { BoxRight } from "../container/right/boxRight";

export type CarPageProps = {
  params: { id: string };
};

export function CarPage({ params }: CarPageProps) {
  const carro = carDetails.find((item) => item.id === params.id);

  if (!carro) {
    return notFound();
  }

  return (
    <main className="bg-gray-200 pl-5 pr-5">
      <div className="flex flex-col pt-5 md:flex-row md:justify-center gap-5 md:pt-10 md:pb-10">

        {/* ESQUERDA */}
        <section className="md:w-[70%]">
          <BoxLeft params={{ id: params.id }} />
        </section>

        {/* DIREITA */}
        <section className="md:w-[30%] hidden md:block">
          <BoxRight params={{ id: params.id }} />
        </section>

      </div>
    </main>
  );
}
