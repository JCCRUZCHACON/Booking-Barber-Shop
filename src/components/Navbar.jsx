import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  //estado para ocultar o mostrar la barra de hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //estado para hacer scroll cuando baja y cambie a transparente
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    // <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <nav className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-transparent' : 'bg-blue-900'
      }`}
      style={{
        backgroundImage: 'url(/images/nombre de la imagen)', // Opcional si deseas agregar una imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Barber Shop App
        </Link>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 hover:text-gray-100 py-2 px-4 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-blue-700 hover:text-gray-100 py-2 px-4 rounded transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:bg-blue-700 hover:text-gray-100 py-2 px-4 rounded transition duration-300"
          >
            Register
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú para dispositivos móviles */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-600 text-center p-4 space-y-2`}
      >
        <Link
          to="/"
          className="text-white block hover:bg-blue-700 py-2 rounded transition duration-300"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-white block hover:bg-blue-700 py-2 rounded transition duration-300"
          onClick={closeMenu}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-white block hover:bg-blue-700 py-2 rounded transition duration-300"
          onClick={closeMenu}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
