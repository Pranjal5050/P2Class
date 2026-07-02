import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RiArrowLeftLine } from "@remixicon/react"
import { RiArrowRightLine } from "@remixicon/react"

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CourseCard from "../components/CourseCard";

const ExploreCourses = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const courses = [
    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 399,
      oldPrice: 699,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course.png",
    },

    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 699,
      oldPrice: 999,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course2.png",
    },

    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 699,
      oldPrice: 999,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course3.png",
    },

    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 699,
      oldPrice: 999,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course4.png",
    },

    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 699,
      oldPrice: 999,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course5.png",
    },

    {
      title: "Class 9",
      board: "CBSE / ICSE",
      subjects: "Maths, Science, English",

      price: 699,
      oldPrice: 999,

      rating: 4.9,

      students: "12,540",

      duration: "120 Hours",

      badge: "Best Seller",

      discount: "30% OFF",

      image: "/course6.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">

          {/* Left Side */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#041d63]">
              Explore Our Courses
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your class and start learning.
            </p>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3 mt-6 md:mt-0">

            {/* Previous Button */}

            <button
              ref={prevRef}
              className="
  cursor-pointer
  w-12
  h-12
  rounded-full
  bg-white
  shadow-lg
  flex
  items-center
  justify-center
  hover:bg-[#041d63]
  hover:text-white
  transition
  duration-300
"
            >
              <RiArrowLeftLine />
            </button>

            {/* Next Button */}

            <button
              ref={nextRef}
              className="
cursor-pointer
w-12
h-12
rounded-full
bg-white
shadow-lg
flex
items-center
justify-center
hover:bg-[#041d63]
hover:text-white
transition
duration-300
"
            >
              <RiArrowRightLine />
            </button>

            {/* Explore More */}

            <Link
              to="/courses"
              className="group hidden md:flex items-center gap-2 font-semibold text-[#041d63]"
            >
              Explore More

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}

          onBeforeInit={(swiper) => {

            swiper.params.navigation.prevEl = prevRef.current;

            swiper.params.navigation.nextEl = nextRef.current;

          }}

          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          // navigation={{
          //   prevEl: ".custom-prev",
          //   nextEl: ".custom-next"
          // }}
          // navigation={true}

          pagination={{
            clickable: true,
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

          loop={true}

          grabCursor={true}

          speed={800}

          spaceBetween={25}

          breakpoints={{

            0: {
              slidesPerView: 1
            },

            640: {
              slidesPerView: 2
            },

            1024: {
              slidesPerView: 4
            }

          }}
        >

          {courses.map((course, index) => (

            <SwiperSlide key={index}>

              <div ref={(el) => (cardsRef.current[index] = el)}>

                <CourseCard
                  title={course.title}
                  board={course.board}
                  subjects={course.subjects}
                  price={course.price}
                  oldPrice={course.oldPrice}
                  rating={course.rating}
                  students={course.students}
                  duration={course.duration}
                  badge={course.badge}
                  discount={course.discount}
                  image={course.image}
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* Mobile Explore More */}

        <div className="flex justify-center mt-8 md:hidden">

          <Link
            to="/courses"
            className="group flex items-center gap-2 text-[#041d63] font-semibold"
          >
            Explore More

            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition"
            />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default ExploreCourses;