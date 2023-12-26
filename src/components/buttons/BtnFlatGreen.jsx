import React from 'react';

export default function BtnFlatGreen({children}) {

    return(
        <>
            <button type="button" class="bg-primary text-white py-2 px-4 rounded-full font-bold text-lg flex gap-2 items-center justify-center w-full hover:bg-secondary transition-all ease-in">
                {children}
            </button>
        </>
    );
};