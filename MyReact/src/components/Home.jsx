import React, { useState } from 'react';
import { Phone, MapPin, Users, Utensils, Waves, Car, Sparkles, Camera, Facebook, Mail, MessageCircle, Star, TreePine, Calendar, Shield } from 'lucide-react';
import Navbar from './Navbar';
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Sample images - in real implementation, these would be actual resort photos
  const galleryImages = [
    { id: 1, src: 'https://lh3.googleusercontent.com/p/AF1QipNSXjfp9yw_qvor-88rTrP5CtH-u7KeajsaTpmP=s680-w680-h510-rw', alt: 'Beautiful garden area', caption: 'Lush Gardens' },
    { id: 2, src: 'https://lh3.googleusercontent.com/p/AF1QipN3uYO6ewDuAXdV4ZGErUjp_mgDJy-chgA4ViGv=s680-w680-h510-rw', alt: 'field', caption: 'Beautiful Field' },
    { id: 3, src: 'https://lh3.googleusercontent.com/p/AF1QipP-8vvFJqjYLMDi51SaambC_jeJZdjUDoB2w_26=s680-w680-h510-rw', alt: 'Event space setup', caption: 'Perfect for Events' },
    { id: 4, src: 'https://lh3.googleusercontent.com/p/AF1QipMD5FXKkT3iCfHKfLMYmmo-Ogqp9dW3E-V3Vh1w=s680-w680-h510-rw', alt: 'Restaurant area', caption: 'Dining Experience' },
    { id: 5, src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npAclTKZEdO8XlFBgN-70GwskviSG27olUHr_NpC_TxvhRsBmv8VKjgH89du7AIn9Q4iAnIr3WAosMCzKJpGO5paIJf-38f2Yjo3xbNgK2vZAp-J83wfxINFHa9uoAj3Oof0xHg=s680-w680-h510-rw', alt: 'Nature walkway', caption: 'Peaceful Walkways' },
    { id: 6, src: 'https://lh3.googleusercontent.com/p/AF1QipNaO-4EMtOIeIPZ3FZDjquCX9YFfJWTKq5bVxLp=s680-w680-h510-rw', alt: 'Scenic view', caption: 'Breathtaking Views' }
  ];

  const amenities = [
    { icon: TreePine, title: 'Spacious Gardens', description: 'Beautifully landscaped gardens perfect for relaxation' },
    { icon: Calendar, title: 'Event Hosting', description: 'Weddings, parties, conferences & corporate events' },
    { icon: Utensils, title: 'On-site Catering', description: 'Delicious meals prepared by our expert chefs' },
    { icon: Waves, title: 'Outdoor Recreation', description: 'Open grounds for family activities, games, and chill hangouts' },
    { icon: Car, title: 'Free Parking', description: 'Ample secure parking space for all guests' },
    { icon: Shield, title: 'Clean Facilities', description: 'Pristine, well-maintained facilities throughout' }
  ];

  const handleFormSubmit = () => {
    // In real implementation, this would send the form data
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your inquiry! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254726222222?text=Hello! I\'d like to inquire about Ephraim Gardens & Recreation Resort.', '_blank');
  };

  return (
    <>
<Navbar/>
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ephraim Gardens
                <span className="block text-3xl md:text-4xl font-light text-amber-200 mt-2">
                  & Recreation Resort
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-stone-200 font-light">
                A peaceful escape just outside the city
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.location.href = 'tel:254726222222'}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone size={20} />
                  Call Now
                </button>
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Ephraim+Gardens+Recreation+Resort', '_blank')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
                >
                  <MapPin size={20} />
                  Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-amber-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <div className="w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float delay-2000">
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
            Your Perfect Getaway Awaits
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Nestled in a serene environment, Ephraim Gardens & Recreation Resort offers the perfect spot for relaxation, family gatherings, and memorable events. Whether you're looking to escape the hustle and bustle of city life or host a celebration that your guests will never forget, we provide the space, the peace, and the perfect atmosphere.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Natural Beauty</h3>
                <p className="text-stone-600">Immerse yourself in our lush, carefully maintained gardens</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Perfect for Groups</h3>
                <p className="text-stone-600">Ideal for families, couples, and corporate events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Memorable Experiences</h3>
                <p className="text-stone-600">Create lasting memories in our beautiful setting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              World-Class Amenities
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Everything you need for the perfect stay, celebration, or corporate event
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-3">{amenity.title}</h3>
                <p className="text-stone-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Experience the Beauty
            </h2>
            <p className="text-xl text-stone-600">
              Take a glimpse into the paradise that awaits you
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Camera className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-emerald-100">
              Ready to plan your perfect getaway or event? We're here to help!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <a href="tel:+254742512764" className="text-emerald-200 hover:text-white transition-colors">
                    +254 726 222222
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <button 
                    onClick={openWhatsApp}
                    className="text-emerald-200 hover:text-white transition-colors"
                  >
                    Chat with us instantly
                  </button>
                </div>
              </div>
              
              <div className="bg-emerald-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-emerald-200 mb-4">
                  Experience our beautiful resort in person. Contact us for directions and visiting hours.
                </p>
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Ephraim+Gardens+Recreation+Resort', '_blank')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
                >
                  <MapPin size={20} />
                  Get Directions
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 text-stone-800">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send us a message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ephraim Gardens & Recreation Resort</h3>
            <p className="text-emerald-200">Your peaceful escape awaits</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
            >
              <MessageCircle size={24} />
            </button>
          </div>
          
          <div className="border-t border-emerald-800 pt-8 text-center text-emerald-200">
            <p>&copy; 2025 Ephraim Gardens & Recreation Resort. All rights reserved.</p>
            <p className="mt-2 text-sm">Website by Cyrus Ngugi</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-semibold bg-black bg-opacity-50 rounded-lg py-2 px-4">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
    
    </>
    
  );
};

export default Home;