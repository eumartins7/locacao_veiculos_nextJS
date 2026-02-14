import { Banner } from "./components/banner/banner";

export function Carousel() {
  return (
    <section className="flex justify-center pt-10">
      {/*  */}
      <main className="relative w-[90%] aspect-1920/600 md:w-[80%] xl:w-[80%] overflow-hidden rounded-2xl">
        <div>
          <Banner />
        </div>
      </main>
    </section>
  );
}
