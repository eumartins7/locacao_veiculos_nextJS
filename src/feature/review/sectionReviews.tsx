"use client";

import { CardReview } from "./components/card-review/cardReview";
import { reviews } from "./components/review-data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

export function SectionReview() {
  return (
    <section
      id="contato"
      className="px-3 pb-10 -mt-px lg:justify-center bg-gray-200 lg:mt-10 pt-10 lg:pb-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="font-vehicle text-2xl text-center lg:text-4xl lg:pb-10">
          <h2>Algumas avaliações feitas por clientes</h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full py-5">
            <Swiper
              modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
              effect="coverflow"
              centeredSlides={true}
              coverflowEffect={{
                rotate: 70,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              slidesPerView={"auto"}
              loop
              navigation
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id} className="w-[50%]">
                  <div className="flex justify-center">
                    <CardReview
                      key={item.id}
                      avatar={item.avatar}
                      nome={item.nome}
                      dia={item.dia}
                      comentario={item.comentario}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
