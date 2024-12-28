import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
  <div>
    <HeroSection />
    <Gallery />
    <BookingForm />
    <Testimonials />
    <Footer />
  </div>
  );
};

export default HomePage;
