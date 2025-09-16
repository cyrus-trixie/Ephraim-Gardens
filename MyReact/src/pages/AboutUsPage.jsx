import React from 'react';
import aboutImage from '../assets/images/openField2.webp';
import overlayImage from '../assets/images/weeding.webp';
import tents from '../assets/images/tents.webp';
import event1 from '../assets/images/openField.webp';
import event2 from '../assets/images/nature.webp';
import event3 from '../assets/images/football-soccer.webp';
import event4 from '../assets/images/Outdoor-Games.jpg';

export default function AboutUsPage() {
  const galleryImages = [aboutImage, event4, tents, event1, event2, event3];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
              About Us
            </h1>
            <p className="text-lg md:text-xl mt-4 animate-slide-in-left">
              Your Perfect Event Space in Muthiga, Nairobi
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Images */}
        <div className="flex-1 relative">
          <img 
            src={overlayImage} 
            alt="Ephraim Gardens" 
            className="w-full h-auto rounded-lg shadow-xl transform -rotate-3"
          />
          <img 
            src={tents} 
            alt="Ephraim Gardens Overlay" 
            className="absolute top-8 left-1/2 w-1/2 h-auto rounded-lg shadow-2xl transform rotate-3 border-4 border-amber-400"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-base md:text-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Welcome to Ephraim Gardens
          </h2>
          <p className="mb-6">
            Ephraim Gardens & Recreation Resort is a versatile open garden space located in Muthiga, Nairobi.  
            Perfect for schools, football teams, community sports, or private events, our garden provides a natural setting where unforgettable memories are made.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Open garden space for sports & events</li>
            <li>Simple & flexible booking for schools, teams, and local communities</li>
            <li>Picturesque natural environment perfect for relaxation and recreation</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4 text-emerald-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3">Spacious Grounds</h3>
              <p>
                Our wide open garden can accommodate large groups and multiple activities simultaneously.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3">Flexible Bookings</h3>
              <p>
                Whether it’s schools, football teams, or private events, we make scheduling easy and stress-free.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3">Natural Beauty</h3>
              <p>
                Surrounded by greenery and fresh air, our garden provides a picturesque backdrop for every occasion.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Garden Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center">
        <a 
          href="tel:+254726222222" 
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          Book the Garden
        </a>
      </section>
    </div>
  );
}
