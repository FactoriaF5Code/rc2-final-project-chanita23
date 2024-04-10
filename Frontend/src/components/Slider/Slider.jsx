import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="sliderContainer"
      >
        <SwiperSlide>
          <img
            src="../../../../src/assets/banner 1.jpg"
            alt="Frutas"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/assets/banner 2.jpg"
            alt="frutas"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/assets/banner 3.jpg"
            alt="variedad de frutas"
          />
        </SwiperSlide>
      </Swiper>
    
    </div>
  );
}
