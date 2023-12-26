


export default function Form() {
    return(
        <form class="flex flex-col gap-4 sm:grid grid-cols-2 gap-x-10 grid-rows-8 h-full">
            <div>
                <input type="text" name="firstName" id="firstName"  placeholder="Nombres" class=" placeholder:text-mediumGray"/>
            </div>
            <div>
                <input type="text" name="lastName" id="lastName"  placeholder="Apellidos" class=" placeholder:text-mediumGray"/>
            </div>
            <div class="col-span-2">
                <input type="email" name="email" id="email"  placeholder="Correo electrónico" class=" placeholder:text-mediumGray"/>
            </div>
            <div class="col-span-2">
                <input type="tel" name="phone" id="phone"  placeholder="Número telefónico" class=" placeholder:text-mediumGray"/>
            </div>
            <div class="col-span-2 row-span-6 h-full">
                <textarea name="message" id="message" placeholder="Escribe un mensaje" class="h-full placeholder:pt-2 placeholder:text-mediumGray"></textarea>
            </div>           
        </form>
    )
};
