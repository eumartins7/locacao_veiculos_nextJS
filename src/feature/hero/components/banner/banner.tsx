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
      desktop1280: "/carousel/banner-1280.png",
      alt: "banner 1",
    },
    {
      id: "2",
      geral: "/carousel/banner-geral-2.png",
      desktop1280: "/carousel/banner-1280-2.png",
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
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={1200}
      breakpoints={{
        0: {
          navigation: false, //mobile
        },
      }}
      pagination={{ clickable: true }}
      navigation
      className="h-full!"
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id} className="h-full">
          <picture className="block h-full w-full">
            <source
              media="(min-width: 1280px) and (max-height: 800px)"
              srcSet={item.desktop1280}
            />

            <img
              src={item.geral}
              alt={item.alt}
              className="h-full w-full obejct-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
