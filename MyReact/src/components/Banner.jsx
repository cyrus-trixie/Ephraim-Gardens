import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Users, Utensils, Waves, Car, Sparkles, Camera, Facebook, Mail, MessageCircle, Star, TreePine, Calendar, Shield, Trophy, Target, Zap } from 'lucide-react';

export default function Banner() {
    // Hero slider images
    const heroImages = [
      { id: 1, src: 'https://images.unsplash.com/photo-1627764940620-90393d0e8c34?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Children playing at Ephraim Gardens & Recreation Resort, Muthiga' },
      { id: 2, src: 'https://images.unsplash.com/photo-1578359968130-76b59bb5af13?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Picnic area at Ephraim Gardens & Recreation Resort, Muthiga' },
      { id: 3, src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Soccer field at Ephraim Gardens & Recreation Resort, Muthiga' },
      { id: 4, src: 'https://images.unsplash.com/photo-1718440821712-258a1addf2aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sports training area at Ephraim Gardens & Recreation Resort, Muthiga' }
    ];
    
    const [currentHeroImage, setCurrentHeroImage] = useState(0);
    
    // Auto-rotate hero images
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
        <>
          {/* Hero Section with Image Slider */}
        <section id="home" className="relative h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
          {/* Hero Image Slider */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                  index === currentHeroImage ? 'opacity-40' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${image.src})` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Hero Slider Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroImage 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-bounce-in">
                  Ephraim Gardens
                  <span className="block text-3xl md:text-4xl font-light text-amber-200 mt-2 animate-slide-in-right">
                    & Recreation Resort
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-stone-200 font-light animate-fade-in-delay-1">
                  Sports, Recreation & Events in Nature
                </p>
                <p className="text-lg mb-8 text-amber-100 animate-fade-in-delay-2">
                  Perfect for schools, teams, and community sports activities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
                  <button 
                    onClick={() => window.location.href = 'tel:254726222222'}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-110 hover:rotate-2 shadow-lg animate-pulse-glow"
                  >
                    <Phone size={20} className="animate-wiggle" />
                    Call Now
                  </button>
                  <button 
                    onClick={() => window.open('https://maps.google.com/?q=Ephraim+Gardens+Recreation+Resort', '_blank')}
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-110 hover:-rotate-2"
                  >
                    <MapPin size={20} className="animate-bounce-subtle" />
                    Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Floating elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-4 h-4 bg-amber-400 rounded-full opacity-70 animate-pulse"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float-reverse delay-1000">
            <div className="w-6 h-6 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float delay-2000">
            <div className="w-3 h-3 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-reverse delay-3000">
            <div className="w-5 h-5 bg-amber-300 rounded-full opacity-40 animate-pulse delay-1500"></div>
          </div>
          <div className="absolute bottom-1/4 right-10 animate-float delay-4000">
            <div className="w-2 h-2 bg-emerald-300 rounded-full opacity-60 animate-pulse delay-2000"></div>
          </div>
        </section>
        </>
    );
}