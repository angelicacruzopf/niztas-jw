import React, { useState } from "react";
import { testimonialList } from "../assets/data/dataTestimonials";
import TestimonialCard from "../components/cards/TestimonialCard";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex items-center py-16 flex-col">
  <div className="w-[90%] md:w-full flex flex-col items-center">
    <h2 className="font-bold text-center mb-10 text-5xl">Lo que piensan nuestros clientes</h2>
    <div className="md:hidden">
        <div className="testimonial-container">
        <TestimonialCard currentIndex={currentIndex} />
        </div>
        <div className="flex justify-center mb-8">
        {testimonialList.map((_, index) => (
            <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            ></span>
        ))}
        </div>
    </div>

    {/* Para escritorio */}
    <div className="hidden md:flex flex-row gap-4 sm:flex-row sm:flex-wrap items-center md:items-start py-16 w-full justify-center">
        <TestimonialCard />
    </div>
    
  </div>
</section>
  );
}
