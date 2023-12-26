import LocationCard from "../components/cards/LocationCard";

export default function Locations() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-[90%] md:w-9/12 md:justify-center">
        <h2 className="font-bold text-center mb-10  text-2xl md:text-5xl">Nuestras sucursales</h2>
        <div className="grid mb-16">
          <div class="flex items-center">
            <h3 class="font-bold py-4">Puerto rico</h3>
            <span class="text-lighterGray ms-2">(2 ubicaciones)</span>
          </div>
          <div class="divide-y w-full">
            <LocationCard />
          </div>
        </div>
      </div>
    </section>
  );
};
