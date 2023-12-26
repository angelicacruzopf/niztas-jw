import Form from "../components/Form";
import BtnFlatRed from "../components/buttons/BtnFlatRed";
import sms from "../assets/img/icons/sms-w.png";
import call from "../assets/img/icons/call-icon-w.png";
import clock from "../assets/img/icons/clock-w.png";


export default function ContactUs() {
    return (
        <section class="flex justify-center bg-third">
            <div class="flex flex-col md:grid grid-cols-3 py-20 w-[90%] lg:w-9/12 place-self-center gap-8 text-white">
                <div class="flex flex-col w-full gap-8">
                    <h2 class="font-bold md:mb-10 text-2xl text-center md:text-4xl md:text-left">¿Necesitas algo?
                    <br />
                    ¡Envíanos un mensaje!</h2>
                    <div class="font-semibold md:inline-block" hidden >
                        <div class="flex items-center mb-7">
                            <div>
                                <img src={sms} alt="SMS icon"/>
                            </div>
                            <p class="ms-4 break-all underline">nitzajewerly2018@gmail.comm</p>
                        </div>
                        <div class="flex items-center mb-7">
                            <div>
                                <img src={call} alt="Call icon"/>
                            </div>
                            <div class="flex flex-col gap-y-2 ms-4 underline">
                            <p>(787) 516 9563</p>
                            <p>(939) 450 4546</p>

                        </div>
                        </div>
                        <div class="flex items-center mb-7">
                            <div>
                                <img src={clock} alt="Call icon"/>
                            </div>
                            <div class="flex flex-col ms-4 gap-y-4 font-bold">
                            <p>Horarios:</p>
                            <p >Lunes a domingo: 10:00am - 6:00pm</p>
                        </div>
                            
                        </div>

                    </div>
                </div>
                <div class="col-span-2 h-full">
                        <Form />
                </div>
                <div class="col-start-2 opacity-50 transition-opacity hover:opacity-100 hover:ease-in">
                    <BtnFlatRed>Enviar mensaje</BtnFlatRed>
                </div>
            </div>
        </section>
    )
};
