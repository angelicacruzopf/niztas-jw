import React from 'react';
import phoneIcn from '../../assets/img/icons/call-icon.png'

export default function BtnIcnLeft({children}) {

    return(
        <>
        <button type="button" class="bg-black text-white py-2 px-4  font-bold text-lg flex gap-2 items-center hover:bg-neutralGray transition-all ease-in sm:text-xs lg:text-base">
            <div>
                <img src={phoneIcn} alt="Phone Icon"/>
            </div>
            {children}
        </button>
        </>
    );
};