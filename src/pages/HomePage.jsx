import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonalSection";
import NewsLetterSection from "../components/Newslettersection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection/>
      <NewsLetterSection/>
      <Footer />
    </>
  );
};

export default HomePage;
