import { productsList } from "../../assets/data/dataProducts";
import { getImageUrl } from "../../assets/data/getImage";

export default function ProductCard() {
    const dataProducts = productsList.map(value =>
    
            <div class="w-full md:w-[30%] min-w-[280px]" key={value.id}>
                <div class="h-94 shadow-xl">
                    <img src={getImageUrl(value)} alt={value.title} class="object-cover w-full h-full"/>
                </div>
                <div class="py-6 px-4">
                    <h3 class="font-bold text-xl pb-2">{value.title}</h3>
                    <p class="pb-2 h-12 text-neutralGray line-clamp-2 ">{value.description}</p>
                    <div class="flex items-end font-bold">
                        <p class="text-2xl">{value.price}</p>
                        <p class="ms-2 text-lg text-[#797C94] font-normal">{value.currency}</p>
                    </div>
                </div>
            </div>
    );
    return dataProducts;
};
