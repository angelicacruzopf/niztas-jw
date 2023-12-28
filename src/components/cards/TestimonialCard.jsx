import React from "react";
import { testimonialList } from "../../assets/data/dataTestimonials";
import { getImageUrlReview } from "../../assets/data/getImageTestimonial";
import fbLogo from '../../assets/img/review/Facebook-color-mini.svg';

export default function TestimonialCard({ currentIndex }) {
  return (
    <div className="flex flex-row gap-4 sm:flex-wrap items-centers py-8 w-full justify-center">
      {testimonialList.map((value, index) => (
        <div
          key={value.id}
          className={`w-full md:w-[30%] min-w-[280px] flex flex-col items-center gap-4 ${
            currentIndex === index ? "active md:mySlidesTest" : "hidden md:flex"
          }`}
        >
            <div className="h-32 w-32 shadow-xl hidden md:inline-block rounded-full">
                <img
                src={getImageUrlReview(value, index)}
                alt={value.name}
                className="object-cover h-full w-full"
                />
            </div>
         
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-gray-500">{value.review}</p>
            <h4 className="font-semibold">{value.name}</h4>
            <div>
              <img src={fbLogo} alt="Facebook logo" />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
