import React from "react";

import {
    GraduationCap,
    Video,
    BookOpen,
    CircleHelp,
    Smartphone,
    Trophy,
} from "lucide-react";

import FeatureCard from "../components/FeatureCard";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <GraduationCap size={32} />,
            title: "Expert Faculty",
            description:
                "Learn from experienced teachers who simplify every concept.",
        },

        {
            icon: <Video size={32} />,
            title: "HD Video Lectures",
            description:
                "Watch high-quality recorded classes anytime and anywhere.",
        },

        {
            icon: <BookOpen size={32} />,
            title: "Test Series",
            description:
                "Practice with chapter-wise and full syllabus mock tests.",
        },

        {
            icon: <CircleHelp size={32} />,
            title: "Doubt Support",
            description:
                "Get your doubts solved quickly by our expert mentors.",
        },

        {
            icon: <Smartphone size={32} />,
            title: "Learn Anywhere",
            description:
                "Access your courses on mobile, tablet or desktop.",
        },

        {
            icon: <Trophy size={32} />,
            title: "Proven Results",
            description:
                "Thousands of students have improved their scores with us.",
        },
    ];

    return (

    <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

            {/* Heading */}

            <div className="text-center mb-16">

                <p className="text-yellow-500 font-semibold uppercase tracking-widest">

                    Why Choose Us

                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-[#041d63] mt-3">

                    Why Choose P² Classes?

                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto mt-5">

                    Learn smarter with expert teachers, HD video lectures,
                    doubt support and test series.

                </p>

            </div>

            {/* Feature Cards */}

            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-8
            "
            >

                {features.map((feature, index) => (

                    <FeatureCard

                        key={index}

                        icon={feature.icon}

                        title={feature.title}

                        description={feature.description}

                    />

                ))}

            </div>

        </div>

    </section>

)

}

export default WhyChooseUs;