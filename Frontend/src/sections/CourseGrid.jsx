import React from "react";
import CourseCard from "../components/CourseCard";

const CourseGrid = () => {

    const courses = [

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
            image: "/course.png",
        },

        {
            title: "Class 10",
            board: "CBSE / ICSE",
            subjects: "Maths, Science, English",
            price: 999,
            oldPrice: 1499,
            rating: 4.8,
            students: "10,250",
            duration: "150 Hours",
            badge: "Trending",
            discount: "35% OFF",
            image: "/course2.png",
        },

        {
            title: "Class 11 PCM",
            board: "CBSE",
            subjects: "Physics, Chemistry, Maths",
            price: 1499,
            oldPrice: 1999,
            rating: 4.9,
            students: "8,540",
            duration: "220 Hours",
            badge: "Top Rated",
            discount: "25% OFF",
            image: "/course5.png",
        },

        {
            title: "Class 12 PCM",
            board: "CBSE",
            subjects: "Physics, Chemistry, Maths",
            price: 1999,
            oldPrice: 2499,
            rating: 5.0,
            students: "7,120",
            duration: "260 Hours",
            badge: "Popular",
            discount: "20% OFF",
            image: "/course6.png",
        },

        {
            title: "Class 11 PCB",
            board: "CBSE",
            subjects: "Physics, Chemistry, Biology",
            price: 1699,
            oldPrice: 2199,
            rating: 4.9,
            students: "6,850",
            duration: "240 Hours",
            badge: "Best Seller",
            discount: "30% OFF",
            image: "/course7.png",
        },

        {
            title: "Class 12 PCB",
            board: "CBSE",
            subjects: "Physics, Chemistry, Biology",
            price: 2199,
            oldPrice: 2699,
            rating: 5.0,
            students: "5,980",
            duration: "280 Hours",
            badge: "Top Choice",
            discount: "25% OFF",
            image: "/course8.png",
        },

    ];

    return (

        <section className="pb-20">

            <div className="max-w-7xl mx-auto px-4">

                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
                >

                    {courses.map((course, index) => (

                        <CourseCard
                            key={index}

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

                    ))}

                </div>

            </div>

        </section>

    );

};

export default CourseGrid;