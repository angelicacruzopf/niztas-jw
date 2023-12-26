import Form from "../components/Form";
import BtnFlatGreen from "../components/buttons/BtnFlatGreen";

export default function ContactUs() {
    return (
        <section class="grid grid-cols-1 ">
            <div class="flex flex-col md:grid grid-cols-3 py-20 w-[90%] md:w-9/12 place-self-center gap-8">
                <div class="flex flex-col w-full gap-8">
                    <h2 class="font-bold md:mb-10 text-2xl text-center md:text-4xl md:text-left">¿Necesitas algo?
                    <br />
                    ¡Envíanos un mensaje!</h2>
                    <div class="text-primary font-semibold md:inline-block" hidden >
                        <div class="flex items-center mb-7">
                        <i class="fa-regular fa-envelope"></i>
                            <p class="ms-4 break-all">hardwaresolutionspr@gmail.com</p>
                        </div>
                        <div class="flex items-center mb-7">
                        <i class="fa-solid fa-phone"></i>
                        <div class="flex flex-col gap-y-2 ms-4">
                            <p>(939) 252 4501</p>
                            <p>(939) 252 1602</p>

                        </div>
                        </div>
                        <div class="flex items-center mb-7">
                        <i class="fa-regular fa-clock"></i>
                        <div class="flex flex-col ms-4 text-neutralGray gap-y-4">
                            <p><strong>Horarios:</strong></p>
                            <p >Lunes a sábado: 7:00am - 6:00pm</p>
                            <p>Domingo: 8:00am - 2:00pm</p>
                        </div>
                            
                        </div>

                    </div>
                </div>
                <div class="col-span-2 h-full">
                        <Form />
                </div>
                <div class="col-start-2 opacity-50 transition-opacity hover:opacity-100 hover:ease-in">
                    <BtnFlatGreen>Enviar mensaje</BtnFlatGreen>
                </div>
            </div>
        </section>
    )
};
