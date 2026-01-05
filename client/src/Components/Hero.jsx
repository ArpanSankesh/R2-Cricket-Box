// client/src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Background Image - Cricket/Sports Turf with better overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto  pb-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 font-semibold text-sm tracking-wider uppercase">
            24/7 Available • Premium Facility
          </span>
        </div>
        
        {/* Main Heading with Gradient */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
          Play Hard.
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 animate-gradient-x">
              Book Easy.
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8 Q50 2, 100 8 T200 8" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Experience the <span className="text-green-400 font-semibold">best turf</span> in town with floodlights, 
          professional mat, and instant booking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          
          {/* Primary CTA - Neo-brutalism style */}
          <a 
            href="#book"
            className="group relative px-8 py-5 bg-green-500 text-black font-black text-lg rounded-xl transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Now - ₹800/hr
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 border-4 border-green-400 rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></div>
          </a>

          {/* Secondary CTA */}
          <a 
            href="https://wa.me/918982836220" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-5 bg-transparent border-2 border-green-500/50 text-white font-bold text-lg rounded-xl hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 backdrop-blur-sm flex items-center gap-2"
          >
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-green-400 mb-2">24/7</div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Available</div>
          </div>
          <div className="text-center border-x border-green-500/20">
            <div className="text-4xl font-black text-green-400 mb-2">5★</div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Rated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-400 mb-2">₹800</div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Per Hour</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
