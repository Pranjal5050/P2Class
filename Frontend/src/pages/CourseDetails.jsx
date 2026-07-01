import React from "react";

import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import CourseHero from "../sections/CourseHero";
import Footer from "../components/Footer";

const CourseDetails = () => {
  return (
    <>
      <Navbar />

      <Breadcrumb />

      <CourseHero />

      <Footer />
    </>
  );
};

export default CourseDetails;