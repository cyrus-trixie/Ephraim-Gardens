import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react'; // Import X for the close icon
import bannerImage from '../assets/images/nature2.webp';
import emailjs from '@emailjs/browser';

// New component for rendering individual contact cards
const ContactInfoCard = ({ name, phone }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
        <div className="flex justify-center mb-4">
            <Phone size={40} className="text-emerald-600" />
        </div>
        <h3 className="font-semibold text-lg text-emerald-800 mb-1">{name}</h3>
        <p className="text-gray-600 mb-4">{phone}</p>
        <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-all"
        >
            <Phone size={16} /> Call Now
        </a>
    </div>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [popup, setPopup] = useState({ visible: false, message: '', isSuccess: false });

    const form = useRef();

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

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

    const contactPersons = [
        { name: 'General Inquiries', phone: '+254726222222' },
        { name: 'Kate', phone: '+254745919893' },
        { name: 'Alice', phone: '+254726518746' },
    ];

    return (
        <>
            {/* Banner Section with Image and Overlay Text */}
            <section
                className="relative h-96 bg-cover bg-center flex items-center text-white"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-left px-8 md:ml-20 max-w-xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-sm md:text-base font-light">
                        We'd love to hear from you! Reach out for bookings or inquiries.
                    </p>
                </div>
            </section>
            <div className="pt-12 pb-12 bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4">
                    <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                        Our team is ready to assist you. Fill out the form below or use our direct contact information.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <form ref={form} onSubmit={handleFormSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                    <input 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="name" 
                                        name="user_name" 
                                        type="text" 
                                        placeholder="Your Name" 
                                        value={formData.name}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="email" 
                                        name="user_email" 
                                        type="email" 
                                        placeholder="Your Email" 
                                        value={formData.email}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                    <textarea 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="message" 
                                        name="message" 
                                        rows="4" 
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Contact Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactPersons.map((person, index) => (
                                <ContactInfoCard key={index} name={person.name} phone={person.phone} />
                            ))}
                        </div>
                    </div>
                    {/* Other contact info like email and location */}
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
                         <div className="grid md:grid-cols-2 gap-8 text-center">
                            <div className="flex items-center gap-4 justify-center">
                                <Mail size={32} className="text-emerald-600" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-700">Email</h3>
                                    <p className="text-gray-600">ephraim.resort@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center">
                                <MapPin size={32} className="text-emerald-600" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-700">Location</h3>
                                    <p className="text-gray-600">Muthiga, Rungiri, Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Embedded Map Section */}
                    <section className="w-full max-w-6xl mx-auto mt-12 mb-8 p-4 bg-white rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">Find Us on the Map</h2>
                        <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.874728827253!2d36.68287827496574!3d-1.2461250987420038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1fbada798123%3A0xa54c51181af82fc7!2sEphraim%20Gardens%20%26%20Recreation%20Resort!5e0!3m2!1sen!2ske!4v1758027587623!5m2!1sen!2ske"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map of Ephraim Gardens Recreation Resort"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>
            
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
        </>
    );
}