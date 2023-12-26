import React from 'react';
import downloadIcn from '../../assets/img/icons/frame.png';

export default function BtnIcnRight({children}) {

    return(
        <>
        <button type="button" class="m-3 text-black py-2 px-4 rounded-full font-semibold text-lg flex gap-2 items-center transition-all ease-in">
            {children}
            <div>
                <img src={downloadIcn} alt="Download icon"/>
            </div>
        </button>
        </>
    );
};