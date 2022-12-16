import React from "react";

// testimonials data
import { gallery } from "../../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const ReviewsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {gallery.map((item, index) => {
          const { authorImg } = item;
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
                <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
