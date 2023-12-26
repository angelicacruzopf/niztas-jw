import React from 'react';

export default function BtnArrowLeft({children}) {

    return(
        <>
        <button type="button" class="bg-primary text-white py-2 px-4 rounded-full font-bold text-lg flex gap-2 items-center hover:bg-secondary transition-all ease-in h-8 ">
            <i class="fa-solid fa-arrow-right"></i>
            {children}
        </button>
        </>
    );
};