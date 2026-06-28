import ExploreCourses from "../sections/ExploreCourses";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats/Stats";
import WhyChooseUs from "../sections/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats/>
      <ExploreCourses/>
      <WhyChooseUs/>
    </>
  );
};

export default Home;