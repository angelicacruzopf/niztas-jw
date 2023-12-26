import React from 'react';

export default function LineBtn({children}) {

    return(
        <>
        <button type="button" class="border-solid border-2 border-slate-600 text-slate-600 py-2 px-8 rounded-full font-bold text-lg w-full">{children}
        </button>
        </>
    );
};