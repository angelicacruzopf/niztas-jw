import {locationsList} from '../../assets/data/dataLocations';
import map from "../../assets/img/map.png";
import BtnFlat from '../buttons/BtnFlat';


export default function LocationCard() {

    return ( 
        <>
            {locationsList.map(value =>
            
            <div class="flex items-center justify-between md:w-[45%] gap-2" key={value.id}>
                <div class="rounded-3xl my-4">
                    <img src={map} alt="mapa"/>
                </div>
                <div class="w-1/2">
                    <h4 class="font-bold md:text-lg ms-4 sm:m-0  text-mediumGray">{value.address}</h4>
                    <p class="font-normal text-[#797C94] ms-4 sm:m-0">{value.phone}</p>
                </div>
                <div class="ms-4 sm:m-0">
                    <BtnFlat>Llamar</BtnFlat>
                </div>
            </div>
            )}
        </>
    );
};

