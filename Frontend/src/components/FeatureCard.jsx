import React from "react";

const FeatureCard = ({
    icon,
    title,
    description,
}) => {

    return (

        <div
            className="
            group
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-3
            transition-all
            duration-500
            border
            border-gray-100
            text-center
        "
        >

            {/* Icon */}

            <div
                className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                text-[#041d63]
                mb-6
                group-hover:bg-[#041d63]
                group-hover:text-white
                transition-all
                duration-500
            "
            >

                {icon}

            </div>

            {/* Title */}

            <h3
                className="
                text-2xl
                font-bold
                text-[#041d63]
            "
            >

                {title}

            </h3>

            {/* Description */}

            <p
                className="
                text-gray-500
                mt-4
                leading-7
            "
            >

                {description}

            </p>

        </div>

    );

};

export default FeatureCard;