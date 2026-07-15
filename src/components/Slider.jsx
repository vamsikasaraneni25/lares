import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

import ai from "../assets/ai.jpg";
import cloud from "../assets/cloud.jpg";
import iot from "../assets/iot.jpg";
import software from "../assets/software.jpg";
import automationImg from "../assets/automationImg.jpg";
import digitalTransformationImg from "../assets/digitalTransformationImg.jpg";

const slides = [
  {
    image: ai,
    title: "Artificial Intelligence",
    description:
      "Empowering businesses with intelligent automation and AI-driven solutions.",
  },
  {
    image: cloud,
    title: "Cloud Computing",
    description:
      "Secure, scalable cloud infrastructure for modern enterprises.",
  },
  {
    image: iot,
    title: "Internet of Things",
    description:
      "Connecting devices and creating smarter digital ecosystems.",
  },
  {
    image: software,
    title: "Software Development",
    description:
      "Custom web and mobile applications built for your business needs.",
  },
  {
  image: automationImg,
  title: "Automation",
  description:
    "Automate repetitive tasks and streamline business workflows to improve productivity and operational efficiency.",
},
{
  image: digitalTransformationImg,
  title: "Digital Transformation",
  description:
    "Modernize your business with innovative digital technologies that accelerate growth and improve customer experiences.",
},
];

function Slider() {
  return (
    <section className="tech-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <div className="slide-content">
                  <h2>{slide.title}</h2>

                  <p>{slide.description}</p>

                  <Link
  to={
    index === 0
      ? "/services/artificial-intelligence"
      : index === 1
      ? "/services/cloud-computing"
      : index === 2
      ? "/services/iot"
      : index === 3
      ? "/services/software-development"
      : index === 4
      ? "/services/automation"
      : "/services/digital-transformation"
  }
  className="slider-btn"
>
  Learn More
</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;