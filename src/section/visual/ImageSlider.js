import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function ImageSlider() {
  const images = [
    "/asset/gallery/main_slide/main_slide_1.jpg",
    "/asset/gallery/main_slide/main_slide_2.jpg",
    "/asset/gallery/main_slide/main_slide_3.jpg",
    "/asset/gallery/main_slide/main_slide_4.jpg",
    "/asset/gallery/main_slide/main_slide_5.jpg",
    "/asset/gallery/main_slide/main_slide_6.jpg",
    "/asset/gallery/main_slide/main_slide_7.jpg",
    "/asset/gallery/main_slide/main_slide_8.jpg",
    "/asset/gallery/main_slide/main_slide_9.jpg",
  ];

  return (
    <div className="slide gx-2 px-md-0 px-3 col-12">
      <div className="scroll_wrap">
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img className="w-100 h-auto" src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
