import DeptosCard from "../components/cards/DeptosCard";


export default function Departamentos() {
    return (
        <section class="flex justify-center bg-secondary text-white">
            <div class="flex flex-col items-center w-1/2 py-20">
                <h2 class="font-bold text-center mb-10 text-2xl md:text-5xl">Departamentos</h2>
                <div class="flex flex-wrap justify-evenly sm:justify-center md:justify-evenly gap-x-20 gap-y-20 h-full">
                    <DeptosCard />
                </div>
            </div>
        </section>
    )
};
