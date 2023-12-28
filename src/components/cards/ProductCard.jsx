import React from "react";
import { productsList } from "../../assets/data/dataProducts";
import { getImageUrl } from "../../assets/data/getImage";

export default function ProductCard({ currentIndex }) {
  return (
    <div className="flex flex-row gap-4 sm:flex-wrap items-centers py-8 w-full justify-center">
      {productsList.map((value, index) => (
        <div
          key={value.id}
          className={`w-full md:w-[30%] min-w-[280px] flex flex-col ${
            currentIndex === index ? "active md:mySlides" : "hidden md:flex"
          }`}
        >
          <div className="h-96 shadow-xl">
            <img
              src={getImageUrl(value, index)}
              alt={value.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6 px-4">
            <h3 className="font-bold text-xl pb-2">{value.title}</h3>
            <p className="pb-2 h-12 text-neutralGray line-clamp-2 ">{value.description}</p>
            <div className="flex items-end font-bold">
              <p className="text-2xl">{value.price}</p>
              <p className="ms-2 text-lg text-[#797C94] font-normal">{value.currency}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
