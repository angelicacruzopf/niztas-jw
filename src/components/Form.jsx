


export default function Form() {
    return(
        <form class="flex flex-col gap-4 h-full text-darkGray">
            <div class="flex flex-col md:flex-row gap-4">
                <div>
                    <input type="text" name="firstName" id="firstName"  placeholder="Nombres" class=" placeholder:text-neutralGray"/>
                </div>
                <div>
                    <input type="text" name="lastName" id="lastName"  placeholder="Apellidos" class=" placeholder:text-neutralGray"/>
                </div>
            </div>
            
            <div class="col-span-2">
                <input type="email" name="email" id="email"  placeholder="Correo electrónico" class=" placeholder:text-neutralGray"/>
            </div>
            <div class="col-span-2">
                <input type="tel" name="phone" id="phone"  placeholder="Número telefónico" class=" placeholder:text-neutralGray"/>
            </div>
            <div class="col-span-2 row-span-6 h-full">
                <textarea name="message" id="message" placeholder="Escribe un mensaje" class="h-full placeholder:pt-2 placeholder:text-neutralGray"></textarea>
            </div>           
        </form>
    )
};
