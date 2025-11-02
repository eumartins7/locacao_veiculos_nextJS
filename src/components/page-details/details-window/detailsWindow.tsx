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
    <main className="bg-gray-200 mt-10 pl-20">
      <div className="flex justify-center">
        <section className="w-[70%] ">
          <div>
            <BoxLeft params={{ id: params.id }} />
          </div>
        </section>

        <section className="w-[30%]">
          <div className="flex-1">
            <BoxRight params={{ id: params.id }} />
          </div>
        </section>
      </div>
    </main>
  );
}
