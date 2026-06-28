import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "10,000+",
      title: "Students",
    },
    {
      number: "500+",
      title: "Videos",
    },
    {
      number: "50+",
      title: "Courses",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="bg-white relative z-20">

      <div className="max-w-6xl mx-auto px-4">

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
          -mt-8
          lg:-mt-12
        ">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-lg
                p-5
                text-center
                border
                border-gray-100
                hover:-translate-y-1
                transition
              "
            >

              <h2 className="text-2xl md:text-3xl font-bold text-[#041d63]">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-500 text-sm md:text-base">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;