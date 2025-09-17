import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import eventImg1 from '../assets/images/Community-Events.jpg';
import eventImg2 from '../assets/images/Outdoor-Games.jpg';
import eventImg3 from '../assets/images/football-soccer.webp';
import teamTraining from '../assets/images/teamTraining.jpg';
import outDoorGames from '../assets/images/Outdoor-Games.jpg';
import athletesTraining from '../assets/images/athlete.jpg';
import children from '../assets/images/children.jpg';
import nature from '../assets/images/nature.webp';
import event1 from '../assets/images/event1.webp';
import nature2 from '../assets/images/nature2.webp';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, MapPin, Users, Utensils, Waves, Car, Sparkles, Camera, Facebook, Mail, MessageCircle, Star, TreePine, Calendar, Shield, Trophy, Target, Zap, X } from 'lucide-react';
import car from '../assets/images/car.jpg';
import tents from '../assets/images/tents.webp';
export default function HomePage() {
  const form = useRef();
  const [popup, setPopup] = useState({ visible: false, message: '', isSuccess: false });
  // State for form data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // State for hero image slider
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  
  // State for testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // State for gallery
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Hero images
  const heroImages = [
    { id: 1, src: 'https://lh3.googleusercontent.com/p/AF1QipNSXjfp9yw_qvor-88rTrP5CtH-u7KeajsaTpmP=s680-w680-h510-rw', alt: 'Lush garden area' },
    { id: 2, src: 'https://lh3.googleusercontent.com/p/AF1QipN3uYO6ewDuAXdV4ZGErUjp_mgDJy-chgA4ViGv=s680-w680-h510-rw', alt: 'Spacious open sports field' },
    { id: 3, src: 'https://lh3.googleusercontent.com/p/AF1QipP-8vvFJqjYLMDi51SaambC_jeJZdjUDoB2w_26=s680-w680-h510-rw', alt: 'Elegant event space setup' },
    { id: 4, src: 'https://lh3.googleusercontent.com/p/AF1QipNaO-4EMtOIeIPZ3FZDjquCX9YFfJWTKq5bVxLp=s680-w680-h510-rw', alt: 'Breathtaking scenic view' },
    { id: 5, src: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw', alt: 'Versatile football and volleyball field' },
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,          // Animation duration in milliseconds
      easing: 'ease-in-out-sine', // Smoother easing function
      once: true,             // Animate elements only once
      offset: 100,            // Trigger animations a little sooner
    });
  }, []);

  // Sample images - in real implementation, these would be actual resort photos
  const galleryImages = [
    { id: 1, src: 'https://lh3.googleusercontent.com/p/AF1QipNSXjfp9yw_qvor-88rTrP5CtH-u7KeajsaTpmP=s680-w680-h510-rw', alt: 'Lush garden area at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Lush Gardens' },
    { id: 2, src: 'https://lh3.googleusercontent.com/p/AF1QipN3uYO6ewDuAXdV4ZGErUjp_mgDJy-chgA4ViGv=s680-w680-h510-rw', alt: 'Open sports field at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Open Sports Field' },
    { id: 3, src: 'https://lh3.googleusercontent.com/p/AF1QipP-8vvFJqjYLMDi51SaambC_jeJZdjUDoB2w_26=s680-w680-h510-rw', alt: 'Event space setup at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Perfect for Events' },
    { id: 4, src: 'https://lh3.googleusercontent.com/p/AF1QipMD5FXKkT3iCfHKfLMYmmo-Ogqp9dW3E-V3Vh1w=s680-w680-h510-rw', alt: 'Restaurant dining area at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Dining Experience' },
    { id: 5, src: nature, alt: 'Nature walkway at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Peaceful Walkways' },
    { id: 6, src: 'https://lh3.googleusercontent.com/p/AF1QipNaO-4EMtOIeIPZ3FZDjquCX9YFfJWTKq5bVxLp=s680-w680-h510-rw', alt: 'Scenic view at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Breathtaking Views' },
    { id: 7, src: nature2, alt: 'Nature scenery at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Nature' },
    { id: 8, src: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw', alt: 'Football/volleyball field at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Volleyball/Football Field' },
    { id: 9, src: event1, alt: 'Events area at Ephraim Gardens & Recreation Resort, Muthiga', caption: 'Events' }
  ];

  const testimonials = [
    {
      id: 1, 
      name: 'Kiragu Kiragu',
      role: 'Local Guide',
      text: 'A good, spacious place to hold a garden event. We had a fantastic time and the environment was perfect for our gathering.',
      rating: 5
    },
    {
      id: 2,
      name: 'Njeri Waweru',
      role: 'Visitor',
      text: 'Very beautiful and serene. It\'s a wonderful escape from the city. The gardens are well-maintained and perfect for relaxation.',
      rating: 5
    },
    {
      id: 3,
      name: 'Alex Matindi',
      role: 'Local Guide',
      text: 'An amazing place for any outdoor activity. The fields are great for sports, and the atmosphere is just fantastic. Highly recommended!',
      rating: 5
    },
    {
      id: 4,
      name: 'Deezain Ant',
      role: 'Visitor',
      text: 'A really nice garden for outdoor events. The space is versatile and can accommodate a variety of functions. We were very impressed.',
      rating: 5
    }
  ];

  const sportsActivities = [
    { 
      title: 'Football/Volleyball', 
      description: 'Full-size field available for training and matches',
      image: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw'
    },
    { 
      icon: Target, 
      title: 'Athletics Training', 
      description: 'Spacious grounds for running, jumping, and field events',
      image: athletesTraining
    },
    { 
      title: 'Team Sports', 
      description: 'Volleyball, basketball, and other team activities',
      image: teamTraining
    },
    { 
      title: 'School Programs', 
      description: 'Special rates for schools without their own sports facilities',
      image: children
    },
    { 
      title: 'Community Events', 
      description: 'Sports tournaments and community competitions',
      image: eventImg1
    },
    { 
      title: 'Outdoor Games', 
      description: 'Traditional games and recreational activities',
      image: outDoorGames
    }
  ];

  const amenities = [
    { image: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw', title: 'Sports Facilities', description: 'Open fields and courts for various sports and activities' },
    { image: 'https://lh3.googleusercontent.com/p/AF1QipP-8vvFJqjYLMDi51SaambC_jeJZdjUDoB2w_26=s680-w680-h510-rw', title: 'Event Hosting', description: 'Weddings, parties, conferences & corporate events' },
    { image: 'https://lh3.googleusercontent.com/p/AF1QipMD5FXKkT3iCfHKfLMYmmo-Ogqp9dW3E-V3Vh1w=s680-w680-h510-rw', title: 'On-site Catering', description: 'Delicious meals prepared by our expert chefs' },
    { image: 'https://lh3.googleusercontent.com/p/AF1QipNSXjfp9yw_qvor-88rTrP5CtH-u7KeajsaTpmP=s680-w680-h510-rw', title: 'Spacious Gardens', description: 'Beautifully landscaped gardens perfect for relaxation' },
    { image: car, title: 'Secure Parking', description: 'Ample and secure parking space for all guests' },
    { image: tents, title: 'Clean Facilities', description: 'Pristine, well-maintained facilities throughout' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the keys from the environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
    })
    .then(
        () => {
            console.log('SUCCESS!');
            setPopup({ visible: true, message: 'Thank you for your inquiry! We\'ll get back to you soon.', isSuccess: true });
            setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
            console.log('FAILED...', error.text);
            setPopup({ visible: true, message: 'Failed to send the message. Please try again later.', isSuccess: false });
        },
    );
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254726222222?text=Hello! I\'d like to inquire about Ephraim Gardens & Recreation Resort.', '_blank');
  };


  return (
    <>

      <div className="min-h-screen bg-stone-50">

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
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                  Ephraim Gardens
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-amber-200 mt-2">
                    & Recreation Resort
                  </span>
                </h1>
                <p className="text-lg md:text-xl mb-4 text-stone-200 font-light animate-fade-in-delay-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  Your Premier Destination for Sports, Events & Recreation.
                </p>
                <p className="text-base md:text-lg mb-8 text-amber-100 animate-fade-in-delay-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  From competitive sports to memorable celebrations, find your perfect space with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Sports & Recreation Section */}
        <section id="sports" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-20" data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4 tracking-tight">
                Sports & Recreation Hub
              </h2>
      <p className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Our top-tier fields are the proud home for local schools, teams, and community events, offering premium facilities at affordable rates.
              </p>
            </div> 
        
            {/* Activities Cards With Images */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
              {sportsActivities.map((activity, index) => (
                <div 
                  data-aos="fade-up" data-aos-delay={index * 100}
                  key={index}
                  className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 group"
                >
                  <div className="h-48 w-full bg-stone-100">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">{activity.title}</h3>
                    <p className="text-stone-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
        
            {/* CTA Box */}
            <div className="mt-24 text-center">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-6 sm:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105" data-aos="fade-up">
                <Trophy className="w-16 h-16 mx-auto text-amber-300 mb-4 animate-bounce-subtle" />
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Special School Programs</h3>
                <p className="text-base md:text-lg text-emerald-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Give your students the space to excel. We offer special discounted rates for school sports days, training sessions, and events.
                </p>
                <button 
                  onClick={() => window.location.href = 'tel:254726222222'}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-110 hover:rotate-1"
                >
                  Inquire About School Rates
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section id="events" className="py-16 sm:py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-800 mb-4 tracking-tight">Upcoming Events</h2>
              <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto">Join us for our special events! Enjoy fun, food, and entertainment for the whole family.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Example events array for easy expansion */}
              {[
                {
                  title: 'Family Fun Day',
                  location: 'Ephraim Gardens – Muthiga',
                  highlights: [
                    'Affordable Food & Drinks',
                    'Entertainment',
                    'Kids Activities',
                    'Zumba Dance',
                    'Photography',
                    'Ample Parking Space',
                  ],
                  cta: 'Carry a shuka/blanket & join us for a memorable day outdoors!',
                  contacts: [
                    { name: 'Kate', phone: '+254745919893' },
                    { name: 'Alice', phone: '+254726518746' },
                  ],
                  image: eventImg1,
                },
                {
                  title: 'Outdoor Adventure',
                  location: 'Ephraim Gardens – Muthiga',
                  highlights: [
                    'Nature Walks',
                    'Team Building',
                    'Fun Games',
                    'Music',
                    'Photography',
                    'Ample Parking Space',
                  ],
                  cta: 'Bring your friends and family for a day of adventure!',
                  contacts: [
                    { name: 'Kate', phone: '+254745919893' },
                    { name: 'Alice', phone: '+254726518746' },
                  ],
                  image: eventImg2,
                },
                {
                  title: 'Football Tournament',
                  location: 'Ephraim Gardens – Muthiga',
                  highlights: [
                    'Trophy & Medals',
                    'Referees',
                    'Snacks & Drinks',
                    'Photography',
                    'Ample Parking Space',
                  ],
                  cta: 'Register your team and compete for glory!',
                  contacts: [
                    { name: 'Kate', phone: '+254745919893' },
                    { name: 'Alice', phone: '+254726518746' },
                  ],
                  image: eventImg3,
                },
                // Add more events here, using images from ../assets/images
              ].map((event, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden border border-stone-200" data-aos="fade-up" data-aos-delay={idx * 100}>
                  {event.image && (
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">{event.title}</h3>
                    <div className="text-stone-600 mb-2"><span className="font-medium text-emerald-700">Location:</span> {event.location}</div>
                    <ul className="mb-3 list-disc list-inside text-stone-700 space-y-1">
                      {event.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="mb-3 text-emerald-800 italic">{event.cta}</div>
                    <div className="mt-auto pt-2 border-t border-stone-100">
                      <div className="font-semibold text-stone-700 mb-1">Contact:</div>
                      <div className="flex flex-wrap gap-4">
                        {event.contacts.map((contact, i) => (
                          <a key={i} href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-emerald-700 hover:text-amber-600 font-medium underline flex items-center gap-1">
                            {contact.name}: {contact.phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id='about' className="py-16 sm:py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-800 mb-8 tracking-tight">
              Where Sports Meets Nature
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
                Ephraim Gardens is the community's hub for action and celebration. Our spacious grounds are the perfect venue for school sports, team training, weddings, and corporate events alike.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center group" data-aos="fade-right" data-aos-delay="100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Trophy className="w-8 h-8 text-emerald-600 group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Sports Excellence</h3>
                  <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300">Professional-grade facilities for all your sporting needs</p>
                </div>
                <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Users className="w-8 h-8 text-amber-600 group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Community Focus</h3>
                  <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300">Supporting schools and community sports programs</p>
                </div>
                <div className="text-center group" data-aos="fade-left" data-aos-delay="300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Sparkles className="w-8 h-8 text-emerald-600 group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Versatile Venue</h3>
                  <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300">From sports to celebrations, we host it all</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-800 mb-12 tracking-tight">What People Say</h2>
        
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((testimonial, index) => (
                <div
                  data-aos="fade-up" data-aos-delay={index * 100}
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <p className="text-stone-700 mb-4 text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
        
                  <div className="flex flex-col items-center mb-3">
                    <span className="font-semibold text-emerald-800">{testimonial.name}</span>
                    <span className="text-stone-500 text-sm">{testimonial.role}</span>
                  </div>
        
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Amenities Section */}
        <section id="amenities" className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-800 mb-6 tracking-tight">
                Complete Facilities
              </h2>
              <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto">
                Everything you need for a perfect day of sports, celebration, or relaxation.
              </p>
            </div>
        
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <div
                  data-aos="fade-up" data-aos-delay={index * 100}
                  key={index}
                  className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 group"
                >
                  <div className="h-48 w-full bg-stone-100">
                    <img 
                      src={amenity.image} 
                      alt={amenity.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">{amenity.title}</h3>
                    <p className="text-stone-600">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
        {/* Photo Gallery */}
        <section id="gallery" className="py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 tracking-tight">See Our Space in Action</h2>
              <p className="text-base md:text-lg text-stone-600">A glimpse into our vibrant sports facilities and serene natural grounds.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  data-aos="fade-up" data-aos-delay={index * 50}
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
        <section id="contact" className="py-16 sm:py-20 px-4 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Book the Perfect Venue
              </h2> 
              <p className="text-base md:text-lg text-emerald-100">
                Ready to plan your sports activity, event, or celebration? Contact us today!
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8" data-aos="fade-right">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <a href="tel:+254726222222" className="text-emerald-200 hover:text-white transition-colors">
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
                  <h3 className="text-xl font-semibold mb-4">Visit Our Facilities</h3>
                  <p className="text-emerald-200 mb-4">
                    Come see our sports facilities and beautiful grounds in person. Contact us to schedule a visit or discuss your requirements.
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
              <div className="bg-white rounded-2xl p-8 text-stone-800" data-aos="fade-left">
                <form ref={form} onSubmit={handleFormSubmit}>
                  <h3 className="text-2xl font-bold text-emerald-800 mb-6">Send us a message</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        placeholder="Tell us about your sports event, school program, or celebration..."
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      <Mail size={20} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

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

        {/* Conditional Pop-up/Modal */}
        {popup.visible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className={`bg-white rounded-lg shadow-xl p-8 max-w-sm w-full mx-auto relative transition-all duration-300 transform scale-100 ${popup.isSuccess ? 'border-t-4 border-emerald-500' : 'border-t-4 border-red-500'}`}>
                    <button 
                        onClick={() => setPopup({ ...popup, visible: false })} 
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex justify-center mb-4">
                        {popup.isSuccess ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">{popup.isSuccess ? 'Success!' : 'Error'}</h3>
                    <p className="text-center text-gray-600">{popup.message}</p>
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setPopup({ ...popup, visible: false })}
                            className={`font-semibold py-2 px-6 rounded-full transition-colors ${popup.isSuccess ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )}
      </div>
    </>
  );
}
                