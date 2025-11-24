'use client'

import { CardReview } from "./card-review/cardReview";
import { reviews } from "./review-data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation, Pagination } from "swiper/modules";

export function SectionReview() {
    return(
        <section id="contato" className="px-3 lg:justify-center bg-gray-200 lg:mt-10 lg:pt-10 lg:pb-10 lg:px-20">
            <main className="">
                <div className="font-vehicle text-2xl text-center lg:text-4xl lg:pb-10">
                    <h1>Algumas avaliações feitas por clientes</h1>
                </div>

                <div className="flex justify-center">
                    <div className="w-full">
                        <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        loop
                        navigation
                        pagination={{ clickable: true }}
                        >
                            {reviews.map((item) => (
                                <SwiperSlide key={item.id}>
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
            </main>
        </section>
    )
}