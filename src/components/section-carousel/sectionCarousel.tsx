'use client'
import { useState } from "react"
import { BotaoCarousel } from "@/components/button-carousel/buttonCarousel"
import Image from "next/image"

export function Carousel() {
  const slides = ['/carousel/imgteste.png', '/carousel/imgteste2.png']
  const [indexAtual, setIndexAtual] = useState(0)

  const prevSlide = () => {
    setIndexAtual((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndexAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="flex justify-center pt-10">
      <div className="relative w-7xl h-[500px] overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover ${
              index === indexAtual ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* o componente de botões precisa estar dentro de um pai 'relative' */}
        <BotaoCarousel prev={prevSlide} next={nextSlide} />
      </div>
    </section>
  )
}

