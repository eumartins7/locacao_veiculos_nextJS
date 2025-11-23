'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carousel() {
  const slides = [
    {id:'1', image:'/carousel/banner1.png', alt:'banner1'},
    {id:'2', image:'/carousel/banner2test.png', alt:'banner2'},
  ]

  return (
    <section className="flex justify-center pt-10">
      <div className="relative w-[80%] h-[150px] lg:h-[600px] overflow-hidden rounded-2xl">
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
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
            <Image 
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="100vw"
            />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

