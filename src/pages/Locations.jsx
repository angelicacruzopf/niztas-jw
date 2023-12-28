import LocationCard from "../components/cards/LocationCard";

export default function Locations() {
  return (
    <section id="sucursales" className="flex justify-center py-16">
      <div className="flex flex-col w-[90%] md:w-9/12 md:justify-center">
        <h2 className="font-bold text-center mb-10  text-2xl md:text-5xl text-mediumGray">Nuestras sucursales</h2>
        <div className="grid mb-16">
          <div class="flex items-center">
            <h3 class="font-bold py-4">Puerto rico</h3>
            <span class="text-[#797C94] ms-2">(2 ubicaciones)</span>
          </div>
          <div class="divide-y w-full flex flex-col justify-center md:justify-between md:flex-row md:divide-y-0">
            <LocationCard />
          </div>
        </div>
      </div>
    </section>
  );
};
