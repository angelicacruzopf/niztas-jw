import { testimonialList } from "../../assets/data/dataTestimonials"

import { getImageUrlReview } from "../../assets/data/getImageTestimonial";

import fbLogo from '../../assets/img/review/Facebook-color-mini.svg'

export default function TestimonialCard() {
    const dataTestimonials = testimonialList.map(value =>
        <div class="flex flex-col justify-center items-center text-center w-[20%] min-w-[295px]">
            <div class="bg-gray-300 rounded-full w-32 h-32 mb-4">
                <img src={getImageUrlReview(value)} alt={value.name} class="object-cover h-full w-full"/>
            </div>
            <div class="flex flex-col items-center gap-4">
                <p class="text-gray-500">{value.review}</p>
                <h4 class="font-semibold">{value.name}</h4>
                <div>
                    <img src={fbLogo} alt="Facebook logo"/>
                </div>
            </div>
        </div>
    );
    return dataTestimonials;
};
