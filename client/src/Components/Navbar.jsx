import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR - Pure black to match hero */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black ${
          scrolled 
            ? 'border-b border-green-500/30 shadow-lg shadow-green-500/10' 
            : 'border-b border-green-500/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO */}
            <a href="#home" className="group flex items-center cursor-pointer">
              <div className="relative">
                <h1 className="text-3xl font-black tracking-tight">
                  <span className="text-green-400 group-hover:text-green-300 transition-colors">
                    R2
                  </span>
                  <span className="text-white group-hover:text-green-400 transition-colors">
                    BOX
                  </span>
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white font-semibold px-3 py-2 transition-all duration-200 text-base lg:text-lg relative group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg transition-all duration-200"></div>
              </a>
              
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white font-semibold px-3 py-2 transition-all duration-200 text-base lg:text-lg relative group"
              >
                <span className="relative z-10">About Turf</span>
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg transition-all duration-200"></div>
              </a>
              
              <a 
                href="#rules" 
                className="text-gray-300 hover:text-white font-semibold px-3 py-2 transition-all duration-200 text-base lg:text-lg relative group"
              >
                <span className="relative z-10">Rules</span>
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg transition-all duration-200"></div>
              </a>

              {/* CTA Button */}
              <a
                href="#book"
                className="relative px-5 py-2.5 lg:px-6 lg:py-3 bg-green-500 text-black font-bold rounded-lg overflow-hidden group text-base lg:text-lg"
              >
                <span className="relative z-10">Book Slot</span>
                <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="absolute inset-0 border-2 border-green-400 rounded-lg translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200 -z-10"></div>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-green-400 hover:text-green-300 focus:outline-none transition-colors"
              >
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black border-t border-green-500/20 px-6 py-6 space-y-3">
            <a 
              onClick={closeMenu} 
              href="#home" 
              className="block text-gray-300 hover:text-green-400 font-semibold py-3 px-4 rounded-lg hover:bg-green-500/10 transition-all duration-200 border-l-4 border-transparent hover:border-green-400 text-base"
            >
              Home
            </a>
            <a 
              onClick={closeMenu} 
              href="#about" 
              className="block text-gray-300 hover:text-green-400 font-semibold py-3 px-4 rounded-lg hover:bg-green-500/10 transition-all duration-200 border-l-4 border-transparent hover:border-green-400 text-base"
            >
              About Turf
            </a>
            <a 
              onClick={closeMenu} 
              href="#rules" 
              className="block text-gray-300 hover:text-green-400 font-semibold py-3 px-4 rounded-lg hover:bg-green-500/10 transition-all duration-200 border-l-4 border-transparent hover:border-green-400 text-base"
            >
              Rules
            </a>

            <a
              onClick={closeMenu}
              href="#book"
              className="block text-center mt-4 px-6 py-3.5 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-200 shadow-lg shadow-green-500/30 text-base"
            >
              Book Slot Now
            </a>
          </div>
        </div>
      </nav>

      {/* SPACER */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
