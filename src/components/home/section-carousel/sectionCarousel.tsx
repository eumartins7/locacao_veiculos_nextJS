'use client'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carousel() {
  const slides = [
    {
      id: '1',
      geral: '/carousel/banner-geral.png',
      desktop1280: '/carousel/banner-1280.png',
      alt: 'banner 1'
    },
    {
      id: '2',
      geral: '/carousel/banner-geral-2.png',
      desktop1280: '/carousel/banner-1280-2.png',
      alt: 'banner 2'     
    }
  ]

  return (
    <section className="flex justify-center pt-10">

      {/*  */}
      <div className="relative w-[90%] aspect-[1920/600] md:w-[80%] xl:w-[80%] overflow-hidden rounded-2xl">
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation
        pagination={{ clickable: true }}
        className="!h-full"
        >
          {slides.map((item) => (
          <SwiperSlide
          key={item.id}
          className="relative"
          >
            <picture>
              <source 
                media="(min-width: 1280px) and (max-height: 800px)"
                srcSet={item.desktop1280}
              />

              <img
                src={item.geral}
                alt={item.alt}
              />
            </picture>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

