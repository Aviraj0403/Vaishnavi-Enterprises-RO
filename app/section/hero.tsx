"use client";
import { Button } from "@/components/ui/button";
import { Play, Droplets, ChevronDown } from "lucide-react";
import WaterDroplets from "@/app/three/water-droplets";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center water-gradient overflow-hidden">
      <WaterDroplets />
      
      {/* RO System Visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 border-2 border-white rounded-lg transform rotate-12 animate-pulse">
          <div className="absolute inset-4 border border-white rounded opacity-50"></div>
          <div className="absolute inset-8 border border-white rounded opacity-30"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-36 md:h-36 border-2 border-white rounded-full transform -rotate-12 animate-pulse">
          <div className="absolute inset-2 border border-white rounded-full opacity-50"></div>
          <div className="absolute inset-4 border border-white rounded-full opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 mb-4">
              <Droplets className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100 font-medium">Premium RO Water Solutions</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Pure Water,
            <br className="hidden sm:block" />
            <span className="text-blue-200"> Pure Life</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in animation-delay-200 max-w-3xl mx-auto">
            Advanced RO water purification systems with KENT technology. Remove 99.9% of impurities including bacteria, viruses, and heavy metals for crystal-clear, healthy water.
          </p>
          
          {/* Features highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in animation-delay-300">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-blue-200 text-sm">Purification Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm">Support Service</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">5 Years</div>
              <div className="text-blue-200 text-sm">Warranty</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Get Free Installation
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 animate-fade-in animation-delay-500">
            <p className="text-blue-200 text-sm mb-4">Trusted by 10,000+ Happy Customers</p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-blue-100 text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-200 transition-colors hidden sm:block"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
