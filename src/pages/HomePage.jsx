import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonalSection";
import NewsLetter from "../components/NewsLetter";

import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection/>
      <NewsLetter/>
      <Footer />
    </>
  );
};

export default HomePage;
