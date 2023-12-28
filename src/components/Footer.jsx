import logoIcn from '../assets/img/logos/logo-w-text.svg';
import fbLogo from '../assets/img/logos/Facebook.png';
import waLogo from '../assets/img/logos/Instagram.png';
import inLogo from '../assets/img/logos/WhatsApp.png';

export default function Footer() {
    return(
        <section class="bg-darkGray flex flex-col justify-center items-center py-16">
            <div class="md:grid grid-cols-3 w-[90%] sm:w-3/5 place-items-center pb-16 max-w-[1000px]">
                <div class="flex flex-col gap-6 w-full">
                    <div class="justify-self-center self-center flex justify-center items-center h-full">
                        <img src={logoIcn} alt="Ícono del logo" class="md:object-cover w-[95%]"/>
                    </div>
                    <p class="text-white text-center">Marcando la diferencia</p>
                    <div class="text-white opacity-50 text-5xl flex flex-row justify-evenly mb-6 md:mb-0">
                        <img src={fbLogo} alt="Logo Facebook"/>
                        <img src={waLogo} alt="Logo Facebook"/>
                        <img src={inLogo} alt="Logo Facebook"/>
                    </div>
                    
                </div>
                <div class="flex flex-col gap-y-4 mb-4 sm:mb-0 text-white">
                    <h3 class=" font-bold">Mapa del sitio</h3>
                    <ul class="grid gap-y-4 underline opacity-60">
                        <li>Nuestros productos</li>
                        <li>Acerca de nosotros</li>
                        <li>Departamentos</li>
                    </ul>
                </div>
                <div class="text-white opacity-60">
                    <ul class="grid gap-y-4 underline">
                        <li>Contacto</li>
                        <li>Nuestras sucursales</li>
                    </ul>
                </div>
            </div>
            <hr class="opacity-50 w-[90%] md:w-4/5"/>
            <span class="sm:text-center text-white opacity-60 pt-8 mb-8 w-[90%] md:w-3/5">2023, Nitza’s Jewelry & more., Todos los derechos reservados..</span>
        </section>
    );
};
