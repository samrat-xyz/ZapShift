import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import customerTop from "../../../assets/customer-top.png";
// Swiper CSS (must include)
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ReviewCard from "./ReviewCard";

function Reviews({ reviewPromise }) {
  const reviews = use(reviewPromise); // If using RSC / React 18.3+
  console.log(reviews);

  return (
    <div className="my-22">
      <div className="text-center my-6">
        <div className="flex justify-center my-4">
          <img src={customerTop} alt="" />
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold text-secondary ">
          What our customers are sayings
        </h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      {/* Slider */}
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // default
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500, 
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="max-w-7xl mx-auto "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="pb-10">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
