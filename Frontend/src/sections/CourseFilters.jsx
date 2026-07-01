import React from "react";
import FilterSelect from "../components/FilterSelect";

const CourseFilters = () => {
    const classOptions = [

        "All Classes",

        "Class 9",

        "Class 10",

        "Class 11",

        "Class 12"

    ];

    const boardOptions = [

        "All Boards",

        "CBSE",

        "ICSE"

    ];

    const subjectOptions = [

        "All Subjects",

        "Maths",

        "Science",

        "Physics",

        "Chemistry",

        "Biology"

    ];

    const sortOptions = [

        "Newest",

        "Price Low to High",

        "Price High to Low",

        "Popularity"

    ];
    return (
        <section className="py-12">

            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-4xl font-bold text-[#041d63]">

                    All Courses

                </h1>

                <p className="text-gray-500 mt-3">

                    Select your class and subject to start learning.

                </p>

            </div>
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                    mt-10
                    "
            >

                <FilterSelect

                    label="Class"

                    options={classOptions}

                />

                <FilterSelect

                    label="Board"

                    options={boardOptions}

                />

                <FilterSelect

                    label="Subject"

                    options={subjectOptions}

                />

                <FilterSelect

                    label="Sort By"

                    options={sortOptions}

                />

            </div>

        </section>
    );
};

export default CourseFilters;