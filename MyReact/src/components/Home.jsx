import React, { useState } from 'react';
import { Phone, MapPin, Users, Utensils, Waves, Car, Sparkles, Camera, Facebook, Mail, MessageCircle, Star, TreePine, Calendar, Shield, Trophy, Target, Zap } from 'lucide-react';
import Navbar from './Navbar';
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

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Hero slider images
  const heroImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1627764940620-90393d0e8c34?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'playing' },
    { id: 2, src: 'https://images.unsplash.com/photo-1578359968130-76b59bb5af13?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'picnic' },
    { id: 3, src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Soccer field' },
    { id: 4, src: 'https://images.unsplash.com/photo-1718440821712-258a1addf2aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sports training' }
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate hero images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Sample images - in real implementation, these would be actual resort photos
  const galleryImages = [
    { id: 1, src: 'https://lh3.googleusercontent.com/p/AF1QipNSXjfp9yw_qvor-88rTrP5CtH-u7KeajsaTpmP=s680-w680-h510-rw', alt: 'Beautiful garden area', caption: 'Lush Gardens' },
    { id: 2, src: 'https://lh3.googleusercontent.com/p/AF1QipN3uYO6ewDuAXdV4ZGErUjp_mgDJy-chgA4ViGv=s680-w680-h510-rw', alt: 'Sports field', caption: 'Open Sports Field' },
    { id: 3, src: 'https://lh3.googleusercontent.com/p/AF1QipP-8vvFJqjYLMDi51SaambC_jeJZdjUDoB2w_26=s680-w680-h510-rw', alt: 'Event space setup', caption: 'Perfect for Events' },
    { id: 4, src: 'https://lh3.googleusercontent.com/p/AF1QipMD5FXKkT3iCfHKfLMYmmo-Ogqp9dW3E-V3Vh1w=s680-w680-h510-rw', alt: 'Restaurant area', caption: 'Dining Experience' },
    { id: 5, src: nature, alt: 'Nature walkway', caption: 'Peaceful Walkways' },
    { id: 6, src: 'https://lh3.googleusercontent.com/p/AF1QipNaO-4EMtOIeIPZ3FZDjquCX9YFfJWTKq5bVxLp=s680-w680-h510-rw', alt: 'Scenic view', caption: 'Breathtaking Views' },
    { id: 7, src: nature2, alt: 'Nature', caption: 'Nature' },
    { id: 8, src: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw', alt: 'Football field', caption: 'Vollaball/Football Field' },
    { id: 9, src: event1, alt: 'events', caption: 'Events' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Coach Sarah Wanjiku',
      role: 'St. Mary\'s Secondary School',
      text: 'Ephraim Gardens has been a game-changer for our school. The facilities are excellent and the staff is so accommodating!',
      rating: 5
    },
    {
      id: 2,
      name: 'David Kimani',
      role: 'Event Organizer',
      text: 'We hosted our corporate team building here. The combination of sports facilities and beautiful gardens made it perfect!',
      rating: 5
    },
    {
      id: 3,
      name: 'Grace Mutua',
      role: 'Parent',
      text: 'My daughter\'s birthday party was magical here. The kids had so much space to play and the catering was delicious!',
      rating: 5
    }
  ];

const sportsActivities = [
  { 
    icon: Trophy, 
    title: 'Football/Volleyball ', 
    description: 'Full-size field available for training and matches',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPNt0kUPFIf0gOPbhmCt_l9E9vS9Rh8m6jFUoSn=s680-w680-h510-rw'
  },
  { 
    icon: Target, 
    title: 'Athletics Training', 
    description: 'Perfect space for running, jumping, and field events',
    image: athletesTraining
  },
  { 
    icon: Zap, 
    title: 'Team Sports', 
    description: 'Volleyball, basketball, and other team activities',
    image: teamTraining
  },
  { 
    icon: Users, 
    title: 'School Programs', 
    description: 'Special rates for schools without their own sports facilities',
    image: children
  },
  { 
    icon: Sparkles, 
    title: 'Community Events', 
    description: 'Sports tournaments and community competitions',
    image: eventImg1
  },
  { 
    icon: Waves, 
    title: 'Outdoor Games', 
    description: 'Traditional games and recreational activities',
    image: outDoorGames
  }
];

  const amenities = [
    { icon: Trophy, title: 'Sports Facilities', description: 'Open fields and courts for various sports and activities' },
    { icon: Calendar, title: 'Event Hosting', description: 'Weddings, parties, conferences & corporate events' },
    { icon: Utensils, title: 'On-site Catering', description: 'Delicious meals prepared by our expert chefs' },
    { icon: TreePine, title: 'Spacious Gardens', description: 'Beautifully landscaped gardens perfect for relaxation' },
    { icon: Car, title: 'Free Parking', description: 'Ample secure parking space for all guests' },
    { icon: Shield, title: 'Clean Facilities', description: 'Pristine, well-maintained facilities throughout' }
  ];

 const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the keys from the environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formData.name && formData.email && formData.message) {
      emailjs.send(serviceId, templateId, formData, publicKey)
        .then((result) => {
            console.log('Email sent successfully!', result.text);
            alert('Thank you for your inquiry! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' }); 
        }, (error) => {
            console.log('Email failed to send...', error.text);
            alert('Failed to send the message. Please try again later.');
        });
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

   {/* Sports & Recreation Section */}
<section id="sports" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-20">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
          <Trophy className="w-10 h-10 text-white" />
        </div>
      </div>
      <h2 className="text-5xl font-extrabold text-emerald-800 mb-4">
        Sports & Recreation Hub
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
        Our spacious fields host schools, teams, and community events. We’re proud to support local institutions by offering top-tier sports and training facilities at affordable rates.
      </p>
    </div>

    {/* Activities Cards With Images */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {sportsActivities.map((activity, index) => (
        <div 
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
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
        <Trophy className="w-16 h-16 mx-auto text-amber-300 mb-4 animate-bounce-subtle" />
        <h3 className="text-3xl font-extrabold mb-3">Special School Programs</h3>
        <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto leading-relaxed">
          Schools can enjoy discounted access to our fields for sports days, training, and more. Let’s support our future champions.
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
<section id="events" className="py-20 px-4 bg-stone-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Upcoming Events</h2>
      <p className="text-xl text-stone-600 max-w-2xl mx-auto">Join us for our special events! Enjoy fun, food, and entertainment for the whole family.</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Example events array for easy expansion */}
      {[
        {
          title: 'Family Fun Day',
          entryFee: 'Adults KES 500 | Kids KES 100',
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
          entryFee: 'Adults KES 400 | Kids KES 80',
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
          entryFee: 'Teams KES 2000',
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
        <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden border border-stone-200">
          {event.image && (
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-emerald-800 mb-2">{event.title}</h3>
            <div className="text-amber-600 font-semibold mb-1">{event.entryFee}</div>
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
        <section className="py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-8">
              Where Sports Meets Nature
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                Ephraim Gardens & Recreation Resort has become the go-to destination for sports activities and outdoor recreation in our community. 
                Our spacious grounds serve local schools, sports teams, and community groups, while also providing the perfect setting for weddings, 
                corporate events, and family celebrations.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center group animate-slide-in-left">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Trophy className="w-8 h-8 text-emerald-600 group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Sports Excellence</h3>
                  <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300">Professional-grade facilities for all your sporting needs</p>
                </div>
                <div className="text-center group animate-slide-in-up">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Users className="w-8 h-8 text-amber-600 group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">Community Focus</h3>
                  <p className="text-stone-600 group-hover:text-stone-800 transition-colors duration-300">Supporting schools and community sports programs</p>
                </div>
                <div className="text-center group animate-slide-in-right">
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

       {/* Amenities Section */}
<section id="amenities" className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
        Complete Facilities
      </h2>
      <p className="text-xl text-stone-600 max-w-2xl mx-auto">
        Everything you need for sports, events, and memorable experiences
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group border border-stone-200 animate-slide-in-up"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
            <amenity.icon className="w-8 h-8 text-white group-hover:animate-wiggle" />
          </div>
          <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{amenity.title}</h3>
          <p className="text-stone-600 leading-relaxed group-hover:text-stone-800 transition-colors duration-300">{amenity.description}</p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Photo Gallery */}
        <section id="gallery" className="py-20 px-4 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
                See Our Facilities
              </h2>
              <p className="text-xl text-stone-600">
                Take a glimpse at our sports facilities and beautiful grounds
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
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your Sports Event
              </h2>
              <p className="text-xl text-emerald-100">
                Ready to plan your sports activity, event, or celebration? Contact us today!
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
                      placeholder="Tell us about your sports event, school program, or celebration..."
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
              <p className="text-emerald-200">Sports, Recreation & Events in Nature</p>
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