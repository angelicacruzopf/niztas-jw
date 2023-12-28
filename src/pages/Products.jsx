// Products.jsx
import React, { useState } from "react";
import BtnFlat from "../components/buttons/BtnFlat";
import BtnIcnRight from "../components/buttons/BtnIcnR";
import ProductCard from "../components/cards/ProductCard";
import {productsList } from "../assets/data/dataProducts";

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="products" className="flex items-center py-16 flex-col">
      <div className="w-[90%] md:w-full flex flex-col items-center">
        <h2 className="font-bold text-center text-2xl md:text-5xl">Los + vendidos</h2>
        <div className="md:hidden">
          <div className="slideshow-container">
            <ProductCard currentIndex={currentIndex} />
          </div>
          <div className="flex justify-center mb-8">
            {productsList.map((_, index) => (
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
          <ProductCard />
        </div>

        <div className="w-full md:w-1/3">
          <BtnFlat>Ver más productos</BtnFlat>
        </div>
        <div className="flex justify-center">
          <BtnIcnRight>Descargar catálogo en PDF</BtnIcnRight>
        </div>
      </div>
    </section>
  );
}
