import {locationsList} from '../../assets/data/dataLocations';
import map from "../../assets/img/map.png";
import BtnIcnLeft from '../buttons/BtnIcnLeft';


export default function LocationCard() {

    return ( 
        <>
            {locationsList.map(value =>
            
            <div class="flex items-center justify-between" key={value.id}>
                <div class="bg-gray-300 rounded-3xl my-4">
                    <img src={map} alt="mapa"/>
                </div>
                <div class="w-1/2">
                    <h4 class="font-bold md:text-lg ms-4 sm:m-0">{value.address}</h4>
                    <p class="font-normal text-lighterGray ms-4 sm:m-0">{value.phone}</p>
                </div>
                <div class="ms-4 sm:m-0">
                    <BtnIcnLeft></BtnIcnLeft>
                </div>
            </div>
            )}
        </>
    );
};

