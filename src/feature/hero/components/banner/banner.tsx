"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Banner() {
  const slides = [
    {
      id: "1",
      geral: "/carousel/banner-geral.png",

      tablet: "/carousel/bannerTablet.png",
      celular: "/carousel/bannerMob.png",
      alt: "banner 1",
    },
    {
      id: "2",
      geral: "/carousel/banner-geral-2.png",

      tablet: "/carousel/bannerTablet2.png",
      celular: "/carousel/bannerMob2.png",
      alt: "banner 2",
    },
  ];

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      effect="coverflow"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop
      speed={1200}
      breakpoints={{
        0: {
          navigation: false,
        },
        1024: {
          navigation: true, // Reativa as setas apenas no desktop
        },
      }}
      pagination={{ clickable: true }}
      navigation
      className="h-full!"
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id} className="h-full">
          <picture className="block h-full w-full">
            {/* Mobile */}
            <source media="(max-width: 767px)" srcSet={item.celular} />

            {/* Tablet (768px até 1023px) */}
            <source media="(max-width: 1023px)" srcSet={item.tablet} />

            {/* Fallback para Telas Gigantes */}
            <img
              src={item.geral}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
