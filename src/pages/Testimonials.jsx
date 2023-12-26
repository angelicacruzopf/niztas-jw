
import TestimonialCard from "../components/cards/TestimonialCard";

export default function Testimonials() {
    return (
        <section class="flex justify-center">
            <div class="flex flex-col items-center w-[90%] md:w-9/12 py-16">
                <h2 class="font-bold text-center mb-10 text-5xl">Lo que piensan nuestros clientes</h2>
                <div class="flex flex-wrap gap-x-14 gap-y-16 justify-center md:justify-evenly">
                    <TestimonialCard />
                </div>
            </div>
        </section>
    )
};
