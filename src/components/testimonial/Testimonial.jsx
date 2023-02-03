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
    name: "Bryan - Senior Developer",
    review:
      "Great job Steve! I like that he is open to feedback and has great problem solve skills. His curiosity to learn more and come up with solutions really made working with Steve a breeze",
  },
  {
    avatar: AVTR2,
    name: "Lorena - Marketing Specialist",
    review:
      "Have such great talents when it comes to designing and thinking outside the box. Very punctual with assignments assigned overall I had such great experience",
  },
  {
    avatar: AVTR3,
    name: "Nicole - Photographer",
    review:
      "I enjoyed working with Steve. He helped me with my college photography porfolio website and some graphic design work. I like his problem solve skills and creativity.",
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
