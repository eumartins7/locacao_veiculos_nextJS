"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { CardReview } from "./components/card-review/cardReview";
import { reviews } from "./components/review-data/reviewData";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SectionReview() {
  return (
    <section
      // Aumentei o padding vertical (py) para dar mais destaque.
      // O -mt-px continua para "colar" perfeitamente na seção cinza anterior.
      className="-mt-px py-16 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título: Ajustei o tamanho e o espaçamento inferior para mobile e desktop */}
        <div className="font-vehicle text-3xl text-center md:text-4xl lg:text-5xl mb-10 md:mb-16">
          <h2 className="text-gray-900 tracking-tight">
            Algumas avaliações feitas por clientes
          </h2>
        </div>

        {/* 1. Remova o "grid" da div pai. O Swiper precisa de largura total para gerenciar os slides */}
        <div className="w-full">
          <Swiper
            // 2. Adicione o Autoplay aqui nos modules
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            spaceBetween={30} // Espaço entre os cards
            // 3. Use breakpoints para definir quantos cards aparecem (substitui o grid do tailwind)
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12" // Espaço para as bolinhas da paginação não cortarem
          >
            {/* 4. O .map deve envolver o SwiperSlide, para que cada review seja um slide individual */}
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <CardReview
                  avatar={item.avatar}
                  nome={item.nome}
                  comentario={item.comentario}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
