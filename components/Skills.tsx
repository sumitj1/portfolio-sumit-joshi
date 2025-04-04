"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Skills_List } from "@/constant";

export default function Skills() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center h-full md:pt-[35px] scroll-mt-8"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-4xl md:text-6xl">
          TECH STACK
        </h1>
        <p className="text-transparent font-light pb-5  mt-4 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl">
          ⚡ What Fuels My Code
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={6} // effect="fade"  // Keep the fade effect for smooth transitions
        autoplay={{
          delay: 0, // Set the auto transition delay to 3 seconds (adjust as needed)
          disableOnInteraction: false, // Keep autoplay even after interaction
          pauseOnMouseEnter: false, // Pause autoplay when the user hovers
        }}
        loop={true}
        speed={1500} // Set transition speed to 800ms for smoother sliding // Enable looping to create a continuous smooth transition effect
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 7, spaceBetween: 10 },
        }}
        className="w-4/5 mt-4"
      >
        {Skills_List.map((skill, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
           <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={skill.image}
              width={skill.width}
              height={skill.height}
              alt={skill.alt}
            />
            {skill?.name && <p className={`text-transparent font-bold bg-clip-text bg-gradient-to-r ${skill.class} mt-2`}>
              {skill?.name}
            </p>}
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
