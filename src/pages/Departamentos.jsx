import DeptosCard from "../components/cards/DeptosCard";


export default function Departamentos() {
    return (
        <section id="departamentos" class="flex justify-center bg-secondary text-white">
            <div class="flex flex-col items-center w-[90%] md:w-9/12 justify-center py-20 max-w-[800px]">
                <h2 class="font-bold text-center mb-10 text-2xl md:text-5xl">Departamentos</h2>
                <div class="flex flex-wrap justify-evenly sm:justify-center md:justify-evenly gap-20">
                    <DeptosCard />
                </div>
            </div>
        </section>
    )
};
