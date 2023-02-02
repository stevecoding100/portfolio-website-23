import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets-portfolio/bryan.jpg";
import AVTR2 from "../../assets-portfolio/lorena.jpg";
import AVTR3 from "../../assets-portfolio/nicole.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bryan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquod eaque alias temporibus. Corrupti sequi possimus magni totamveniam",
  },
  {
    avatar: AVTR2,
    name: "Lorena",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquod eaque alias temporibus. Corrupti sequi possimus magni totamveniam",
  },
  {
    avatar: AVTR3,
    name: "Nicole",
    review:
      "I really enjoyed working with Steve. He helped me with my college photography porfolio website and some graphic design work. I like his problem solve skills and creativity.",
  },
];

const Testimonia = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonia;
