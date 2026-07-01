import React from "react";
import {
  Star,
  Users,
  Clock3,
  Globe,
  CalendarDays,
  Heart,
  PlayCircle,
} from "lucide-react";

const CourseHero = () => {
  const course = {
    title: "Class 10 Science Master Course",
    teacher: "P² Classes",
    rating: 4.9,
    students: "12,540 Students",
    duration: "120 Hours",
    language: "Hindi + English",
    access: "Lifetime Access",
    price: 999,
    oldPrice: 1499,
    image: "/course5.png",
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <div className="relative group">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={course.image}
                alt={course.title}
                className="
                w-full
                h-[260px]
                sm:h-[350px]
                lg:h-[480px]
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
              />

            </div>

            {/* Play Button */}

            <button
              className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
            >

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-white/90
                flex
                items-center
                justify-center
                shadow-2xl
                hover:scale-110
                transition
                duration-300
              "
              >

                <PlayCircle
                  size={45}
                  className="text-[#041d63]"
                />

              </div>

            </button>

          </div>

          {/* RIGHT SIDE */}

          <div>

            {/* Rating */}

            <div className="flex items-center gap-2">

              <Star
                size={20}
                fill="#facc15"
                stroke="#facc15"
              />

              <span className="font-semibold">
                {course.rating}
              </span>

              <span className="text-gray-500">
                ({course.students})
              </span>

            </div>

            {/* Title */}

            <h1
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#041d63]
              mt-4
              leading-tight
            "
            >
              {course.title}
            </h1>

            {/* Teacher */}

            <p className="mt-4 text-lg text-gray-600">

              By

              <span className="font-semibold text-[#041d63]">
                {" "}
                {course.teacher}
              </span>

            </p>

            {/* Info */}

            <div
              className="
              grid
              sm:grid-cols-2
              gap-5
              mt-8
            "
            >

              <div className="flex items-center gap-3">

                <Users
                  className="text-[#041d63]"
                  size={20}
                />

                <span>{course.students}</span>

              </div>

              <div className="flex items-center gap-3">

                <Clock3
                  className="text-[#041d63]"
                  size={20}
                />

                <span>{course.duration}</span>

              </div>

              <div className="flex items-center gap-3">

                <Globe
                  className="text-[#041d63]"
                  size={20}
                />

                <span>{course.language}</span>

              </div>

              <div className="flex items-center gap-3">

                <CalendarDays
                  className="text-[#041d63]"
                  size={20}
                />

                <span>{course.access}</span>

              </div>

            </div>

            {/* Price */}

            <div className="flex items-center gap-4 mt-10">

              <h2
                className="
                text-5xl
                font-bold
                text-[#041d63]
              "
              >
                ₹{course.price}
              </h2>

              <span
                className="
                line-through
                text-2xl
                text-gray-400
              "
              >
                ₹{course.oldPrice}
              </span>

            </div>

            {/* Buttons */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
            "
            >

              <button
                className="
                flex-1
                py-4
                rounded-xl
                bg-yellow-400
                text-[#041d63]
                font-bold
                text-lg
                hover:bg-yellow-300
                transition
                duration-300
              "
              >
                Enroll Now
              </button>

              <button
                className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                rounded-xl
                border-2
                border-[#041d63]
                text-[#041d63]
                hover:bg-[#041d63]
                hover:text-white
                transition
                duration-300
              "
              >

                <Heart size={20} />

                Wishlist

              </button>

            </div>

            {/* Features */}

            <div
              className="
              mt-10
              grid
              grid-cols-2
              gap-4
            "
            >

              <div className="bg-white rounded-xl shadow p-4">

                <p className="text-sm text-gray-500">
                  Course Type
                </p>

                <h3 className="font-semibold mt-1">
                  Recorded Classes
                </h3>

              </div>

              <div className="bg-white rounded-xl shadow p-4">

                <p className="text-sm text-gray-500">
                  Certificate
                </p>

                <h3 className="font-semibold mt-1">
                  Available
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseHero;