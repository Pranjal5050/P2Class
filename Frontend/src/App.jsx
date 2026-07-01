import Home from "./pages/Home"
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Courses from "./pages/Courses";
import { Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };

  }, []);
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </div>
  )
}

export default App