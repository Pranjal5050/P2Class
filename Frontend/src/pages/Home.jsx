import ExploreCourses from "../sections/ExploreCourses";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats/Stats";
import WhyChooseUs from "../sections/WhyChooseUs";
import CTASection from "../sections/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats/>
      <ExploreCourses/>
      <WhyChooseUs/>
      <CTASection/>
      <Footer/>
    </>
  );
};

export default Home;