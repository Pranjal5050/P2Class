import React from "react";

import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import CourseFilters from "../sections/CourseFilters";
import CourseGrid from "../sections/CourseGrid";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const Courses = () => {

    return (

        <>

            <Navbar />

            <Breadcrumb />

            <CourseFilters />

            <CourseGrid />

            <Pagination />

            <Footer />

        </>

    );

};

export default Courses;