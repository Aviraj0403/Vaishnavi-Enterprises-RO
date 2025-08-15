
"use client"; // Add this line to mark the file as a client-side component

import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 water-gradient rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2C5.95 2 3 5.5 3 9.5c0 4.5 7 10.5 7 10.5s7-6 7-10.5C17 5.5 14.05 2 10 2zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" clipRule="evenodd" />
              </svg>
            </div>
            {/* <span className="text-lg sm:text-xl font-bold text-blue-600">Vaishnavi Enterprises RO</span> */}
             <span className="text-lg sm:text-xl font-bold text-white bg-blue-600 px-4 py-2 rounded-md">
              Vaishnavi Enterprises RO
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button
            className="md:hidden text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
