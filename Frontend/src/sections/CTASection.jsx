import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">

      <div
        className="
          max-w-7xl
          mx-auto
          rounded-3xl
          overflow-hidden
          bg-[#041d63]
          relative
        "
      >

        {/* Background Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#041d63] via-[#082d8d] to-[#041d63] opacity-95"></div>

        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-2
            items-center
            gap-10
            px-8
            md:px-14
            py-16
          "
        >

          {/* Left */}

          <div>

            <p className="uppercase tracking-widest text-yellow-400 font-semibold mb-4">
              Start Learning Today
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Start Your Learning
              <br />
              Journey Today!
            </h2>

            <p className="text-blue-100 mt-6 text-lg max-w-xl">
              Join thousands of students preparing for
              CBSE & ICSE with India's best teachers.
            </p>

            <button
              className="
                mt-8
                flex
                items-center
                gap-3
                bg-yellow-400
                hover:bg-yellow-300
                px-8
                py-4
                rounded-xl
                font-semibold
                text-[#041d63]
                transition-all
                duration-300
              "
            >
              Explore Courses

              <ArrowRight size={20} />

            </button>

          </div>

          {/* Right */}

          <div className="hidden lg:flex justify-end">

            <img
              src="/student_group3.png"
              alt="Students"
              className="max-h-[680px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;