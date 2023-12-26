import logoIcn from '../assets/img/hs-logo-icon.png'

export default function Footer() {
    return(
        <section class="bg-neutral-800 flex flex-col justify-center items-center py-16">
            <div class="md:grid grid-cols-3 w-[90%] sm:w-3/5 place-items-center pb-16">
                <div class="flex flex-col gap-6 w-full">
                    <div class="bg-neutral-300 justify-self-center self-center flex justify-center items-center">
                        <img src={logoIcn} alt="Ícono del logo" class="md:object-cover md:w-14"/>
                    </div>
                    <p class="text-white text-center">Tu ferretería del futuro</p>
                    <div class="text-white opacity-50 text-5xl flex flex-row justify-center mb-6 sm:mb-0">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                    
                </div>
                <div class="flex flex-col gap-y-4 mb-4 sm:mb-0 text-white">
                    <h3 class=" font-bold">Mapa del sitio</h3>
                    <ul class="grid gap-y-4 underline opacity-60">
                        <li class="sm:hidden">Inicio</li>
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
            <hr class="opacity-50 w-[90%] md:w-3/5"/>
            <span class="sm:text-center text-white opacity-60 pt-8 mb-8 w-[90%] md:w-3/5">2023, Hardware Solutions Inc., Todos los derechos reservados.</span>
        </section>
    );
};
