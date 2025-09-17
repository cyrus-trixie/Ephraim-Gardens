import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { Camera } from "lucide-react";

import eventImg3 from '../assets/images/football-soccer.webp';
import nature from '../assets/images/nature.webp';
import event1 from '../assets/images/event1.webp';
import nature2 from '../assets/images/nature2.webp';
import car from '../assets/images/car.jpg';
import volleyball from '../assets/images/football-soccer.webp';
import wedding from '../assets/images/weeding.webp';
import tents from '../assets/images/tents.webp';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const images = [
    eventImg3,
    nature,
    event1,
    nature2,
    car,
    volleyball,
    wedding,
    tents,
];

export default function GalleryPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        initialSlide: currentIndex,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold text-center pt-20 mb-12 animate-bounce-in">
                Gallery
                <span className="block text-2xl md:text-3xl font-light text-amber-200 mt-2 animate-slide-in-right">
                    & Moments Captured
                </span>
            </h1>

            {/* Floating Elements */}
            <div className="absolute top-16 left-10 animate-float">
                <div className="w-4 h-4 bg-amber-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
            <div className="absolute top-32 right-20 animate-float-reverse delay-1000">
                <div className="w-6 h-6 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
            <div className="absolute bottom-32 left-1/4 animate-float delay-2000">
                <div className="w-3 h-3 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-20">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => openModal(idx)}
                        className="relative overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 shadow-lg"
                    >
                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Camera size={40} className="text-amber-400 animate-bounce" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 outline-none p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="w-full max-w-5xl">
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="slick-slide !flex items-center justify-center h-[80vh] px-2"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${idx}`}
                                    className="max-h-full max-w-full rounded-lg object-contain"
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={closeModal}
                            className="bg-white hover:bg-grey-100 text-black font-bold py-2 px-2 rounded-full transition-colors"
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}