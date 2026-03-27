import { Banner } from "./components/banner/banner";

export function Carousel() {
  return (
    <section className="flex justify-center pt-40">
      <div
        className="relative w-[92%] md:w-[85%]  aspect-square md:aspect-1280/800 lg:aspect-1920/600 overflow-hidden rounded-2xl shadow-lg"
      >
        <div className="h-full w-full">
          <Banner />
        </div>
      </div>
    </section>
  );
}
