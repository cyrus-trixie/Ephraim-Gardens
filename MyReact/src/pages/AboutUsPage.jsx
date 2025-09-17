import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/images/openField2.webp';
import overlayImage from '../assets/images/weeding.webp';
import tents from '../assets/images/tents.webp';
import event1 from '../assets/images/openField.webp';
import event2 from '../assets/images/nature.webp';
import event3 from '../assets/images/football-soccer.webp';
import event4 from '../assets/images/Outdoor-Games.jpg';

export default function AboutUsPage() {
  const galleryImages = [aboutImage, event4, tents, event1, event2, event3];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-8">
          <div className="max-w-lg">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              About Ephraim Gardens
            </h1>
            <p 
              className="text-lg md:text-xl"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Your Premier Event Space in Muthiga, Nairobi
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
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <img 
            src={tents} 
            alt="Ephraim Gardens Overlay" 
            className="absolute top-8 left-1/2 w-1/2 h-auto rounded-lg shadow-2xl transform rotate-3 border-4 border-amber-400"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-base md:text-lg">
          <h2 
            className="text-2xl md:text-3xl font-semibold mb-6"
            data-aos="fade-up"
          >
            Welcome to Ephraim Gardens
          </h2>
          <p 
            className="mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ephraim Gardens & Recreation Resort is a premier versatile open garden space located in Muthiga, Nairobi.  
            Specializing in school events, team sports, community gatherings, and private celebrations, our meticulously 
            maintained grounds provide an idyllic natural setting where unforgettable memories are crafted.
          </p>
          <ul className="space-y-3">
            <li 
              className="flex items-start"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="text-amber-400 mr-2 mt-1">•</span>
              <span>Expansive garden venue optimized for sports & special events</span>
            </li>
            <li 
              className="flex items-start"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="text-amber-400 mr-2 mt-1">•</span>
              <span>Streamlined booking process for educational institutions, athletic teams, and community organizations</span>
            </li>
            <li 
              className="flex items-start"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <span className="text-amber-400 mr-2 mt-1">•</span>
              <span>Scenic natural environment ideal for both recreation and relaxation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4 text-emerald-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Why Choose Ephraim Gardens
          </h2>
          <p 
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the distinguishing features that make our venue the preferred choice for discerning clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div 
              className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spacious Grounds</h3>
              <p className="text-gray-600">
                Our expansive landscape accommodates large gatherings and multiple concurrent activities with ease.
              </p>
            </div>
            
            <div 
              className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Bookings</h3>
              <p className="text-gray-600">
                Our accommodating scheduling system ensures a seamless reservation process for all event types.
              </p>
            </div>
            
            <div 
              className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Beauty</h3>
              <p className="text-gray-600">
                Immerse your guests in our lush, picturesque environment, providing an enchanting backdrop for every occasion.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Our Gallery
        </h2>
        <p 
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore our versatile event spaces through these captivating visuals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={(idx % 3) * 100}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-emerald-800">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            Reserve Your Extraordinary Event Experience
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact us today to discuss availability and tailor-made packages for your specific requirements
          </p>
          <a 
            href="tel:+254726222222" 
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +254 726 222 222
          </a>
        </div>
      </section>
    </div>
  );
}