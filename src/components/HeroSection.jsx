import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 min-h-screen flex items-center justify-center text-white">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container text-center relative z-10 px-6 py-12 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the Best Barber Shop Experience
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Quality haircuts, professional services, and a relaxing environment. Book your appointment today!
        </p>

        <div className="flex justify-center space-x-6 flex-wrap">
          <Link to="/register"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 px-8 py-3 rounded-full text-xl font-semibold transform transition duration-300 ease-in-out hover:scale-105 mb-4 sm:mb-0"
          >
            Book Now
          </Link>
          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-xl font-semibold transform transition duration-300 ease-in-out hover:scale-105 mb-4 sm:mb-0"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// const HeroSection = () => (
//     <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/barber-hero.jpg')" }}>
//       <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
//         <h1 className="text-5xl font-bold mb-4">Bienvenido a BarberShop Pro</h1>
//         <p className="text-xl mb-6">Transforma tu estilo con nuestros profesionales.</p>
//         <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition duration-300">
//           Reserva tu cita
//         </Link>
//       </div>
//     </div>
//   );
//   export default HeroSection;
  