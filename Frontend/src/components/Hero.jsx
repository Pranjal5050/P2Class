
import React from "react";
import {
    BookOpen,
    GraduationCap,
    Atom,
    PlayCircle,
} from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-[#041d63] overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10 py-10">

                    {/* LEFT SIDE */}

                    <div className="text-white text-center lg:text-left">

                        <p className="text-yellow-400 font-semibold tracking-widest mb-4">
                            CBSE / ICSE
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
                            Learn Better,
                            <br />
                            Score Higher!
                        </h1>

                        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                            High quality video lectures for Class 9th to
                            12th by expert teachers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                            <button className="bg-yellow-400 text-[#041d63] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
                                Explore Courses
                            </button>

                            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#041d63] transition duration-300">
                                Watch Demo
                            </button>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    {/* <div className="relative"> */}
                    <div className="relative flex items-start justify-start lg:justify-start">

                        {/* Glow Circle */}

                        <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-yellow-400/20 rounded-full blur-3xl"></div>

                        {/* Floating Icons */}

                        <BookOpen
                            size={45}
                            className="absolute left-0 top-10 text-white/20 hidden md:block"
                        />

                        <GraduationCap
                            size={50}
                            className="absolute right-10 top-20 text-yellow-400/20 hidden md:block"
                        />

                        <Atom
                            size={70}
                            className="absolute left-10 bottom-10 text-white/20 hidden md:block"
                        />

                        <PlayCircle
                            size={60}
                            className="absolute right-0 bottom-20 text-white/20 hidden md:block"
                        />

                        {/* Student Image */}

                        <img
                            src="/student1.png"
                            alt="Student"
                            className="
                            relative
                            hidden
                            lg:block
                            z-10
                            -mt-20
                            object-cover

                            h-[300px]
                            sm:h-[350px]
                            md:h-[450px]
                            lg:h-[550px]
                            xl:h-[620px]
              "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
