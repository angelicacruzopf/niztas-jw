import React from 'react';

export default function BtnFlat({children}) {

    return(
        <>
            <button type="button" class="bg-darkGray text-white py-2 px-4 font-semibold text-lg flex gap-2 items-center justify-center w-full hover:bg-black transition-all ease-in">
                {children}
            </button>
        </>
    );
};