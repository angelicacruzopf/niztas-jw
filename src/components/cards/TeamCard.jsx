import { teamList } from "../../assets/data/dataTeam"
import { getImageUrlDepmnt } from "../../assets/data/getImageDepartments";

export default function TeamCard() {
    const dataTeam = teamList.map(value =>
        <div class="flex flex-col justify-center items-center text-center basis-1/5 mb-4">
            <div class="bg-gray-300 rounded-full w-32 h-32 mb-4">
                <img src={getImageUrlDepmnt(value)} alt={value.name} class="object-cover h-full w-full"/>
                <div>
                    <h4 class="font-semibold mt-4">{value.name}</h4>
                </div>
            </div>
        </div>
    );
    return dataTeam;
};
