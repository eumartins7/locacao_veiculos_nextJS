"use client";

import { CardPageTwo } from "@/app/carros/components/pagina-carros/todos-carros/pageCar-card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Car } from "../../types/car";

import "swiper/css";
import "swiper/css/pagination";

type CarsCarouselProps = {
  cars: Car[];
};

export function CarCarrossel({ cars }: CarsCarouselProps) {
  return (
    <div className="px-3">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        pagination={{
          el: ".cars-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            pagination: false,
          },
          640: {
            slidesPerView: 1.7,
          },
          1024: {
            slidesPerView: 2.6,
          },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CardPageTwo
              id={car.id}
              brand={car.marca}
              model={car.modelo}
              price={car.price}
              plan={car.plan}
              image={car.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="cars-pagination mt-4 flex justify-center"></div>
    </div>
  );
}
