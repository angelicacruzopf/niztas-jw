
import logoVertical from '../assets/img/logos/logo-vertical-bco.svg';

export default function AboutUs() {
  return (
    <section>
      <div class="bg-darkGray flex flex-col items-center py-16">
        <div class="flex flex-col items-center w-1/2">
          <div class="flex flex-col justify-center">
            <div class="flex justify-center h-52 mb-8">
              <img src={logoVertical} alt="Logotipo Hardware Solutions" class="object-cover h-full"/>
            </div>
            <div class="flex flex-col gap-4">
              <div class="text-white flex flex-col text-center font-semibold  gap-4">
                <p>En Nitza’s tenemos lo que necesitas para verte y sentirte bien.</p>
                <p>Somos tu tienda de confianza para darte los gustos que te mereces y contamos con gran variedad de productos especiales para ti..</p>
                <p>¡Exprésate libremente!</p>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
