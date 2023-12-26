import React from 'react';
import arrowLeft from '../assets/img/icons/arrow-left-w.png'
import arrowRight from '../assets/img/icons/arrow-right-w.png'

function SmBanner() {
    return (
     <section>
        <div class="w-full bg-mediumGray text-white text-sm sm-banner flex justify-between items-center py-2 px-4">
            <div>
                <img src={arrowLeft} alt="Arrow left"/>
            </div>
            <p class="text-center">
                Hasta el <strong>70%</strong> de <strong>descuento.</strong>
            </p>
            <div>
                <img src={arrowRight} alt="Arrow right"/>
            </div>
        </div>
    </section>
    );
}

export default  SmBanner;