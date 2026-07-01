import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

const CourseCard = ({
  title,
  board,
  subjects,
  price,
  oldPrice,
  rating,
  students,
  duration,
  badge,
  discount,
  image
}) => {
  return (
    <div
      className="
      course-card
      group
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-3
      transition-all
      duration-500
      border
      border-gray-100
      "
    >


      {/* Image Section */}

      <div className="relative overflow-hidden cursor-pointer">

        {/* Best Seller Badge */}

        <span
          className="
          absolute
          top-4
          left-4
          z-20
          bg-orange-500
          text-white
          text-xs
          font-semibold
          px-3
          py-1
          rounded-full
          shadow-md
        "
        >
          {badge}
        </span>

        {/* Discount Badge */}

        <span
          className="
      absolute
      top-4
      right-4
      z-20
      bg-red-500
      text-white
      text-xs
      font-semibold
      px-3
      py-1
      rounded-full
      shadow-md
    "
        >
          {discount}
        </span>

        {/* Image */}

        <div className="h-56 overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
            w-full
            h-full
            md:object-cover
            transition-all
            duration-700
            group-hover:scale-110"
          />

        </div>

      </div>



      {/* Content */}

      <div className="p-5">

        {/* Rating */}

        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-1">

            <Star
              size={16}
              fill="#facc15"
              stroke="#facc15"
            />

            <span className="font-semibold text-sm">
              {rating}
            </span>

          </div>

          <div className="flex items-center gap-1 text-gray-500">

            <Users size={16} />

            <span className="text-sm">
              {students}
            </span>

          </div>

        </div>

        {/* Duration */}

        <div className="flex items-center gap-2 text-gray-500 mb-4">

          <Clock3 size={16} />

          <span className="text-sm">
            {duration}
          </span>

        </div>

        {/* Course Name */}

        <h3 className="text-xl font-bold text-[#041d63]">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {board}
        </p>

        <p className="text-gray-600 mt-2">
          {subjects}
        </p>

        {/* Price */}

        <div className="flex items-center gap-3 mt-5">

          <h4 className="text-2xl font-bold text-[#041d63]">
            ₹{price}
          </h4>

          <span className="line-through text-gray-400">
            ₹{oldPrice}
          </span>

        </div>

        {/* Button */}

        <Link to={`/course/1`}>
          <button
            className="
            group
            w-full
            mt-6
            bg-[#041d63]
            text-white
            py-3
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
            hover:bg-[#062b8c]
            transition-all
            duration-300
          "
          >

            Enroll Nows

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>
        </Link>

      </div>
    </div>
  );
};

export default CourseCard;