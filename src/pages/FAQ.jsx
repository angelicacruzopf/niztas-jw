import React from 'react';
import FrequentQuestion from '../components/cards/FrequentQuestion';
import { faqList } from '../assets/data/dataFaq';

const FAQ = () => {
  return (
    <section class="flex justify-center bg-mediumGray">
        <div class="flex flex-col items-center w-[90%] md:w-9/12 py-16 text-white">
            <h2 class="font-bold mb-10 text-4xl">FAQs</h2>
            <div class="divide-y w-full">
                {faqList.map(({ question, answer }) => (
                <FrequentQuestion title={question} content={answer} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQ;