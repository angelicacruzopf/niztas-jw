

import BtnFlat from "../components/buttons/BtnFlat";
import BtnIcnRight from "../components/buttons/BtnIcnR";
import ProductCard from "../components/cards/ProductCard";

export default function Products() {
    return(
        <section class="flex items-center py-16 flex-col">
            <div class="flex flex-col items-center w-[90%]">
                <h2 class="font-bold text-center text-2xl md:text-5xl">Los + vendidos</h2>
                <div class="flex flex-col md:flex-row gap-4 sm:flex-row sm:flex-wrap items-center md:items-start py-16 w-full justify-center">
                    <ProductCard />
                </div>
                <div>
                    <div class="w-full">
                        <BtnFlat>Ver más productos</BtnFlat>
                    </div>
                    <div class="flex justify-center">
                        <BtnIcnRight>Descargar catálogo en PDF</BtnIcnRight>
                </div>
                </div>
            </div>
        </section>        
    )
}; 