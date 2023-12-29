import BtnFlatRed from "../components/buttons/BtnFlatRed";
import FormNoSent from "./FormNoSent";

export default function Form() {

  
  return (
    <div className="w-full">
      <form class="flex flex-col gap-4 h-full text-darkGray">
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <div className="field md:w-1/2">
            <input
              type="text"
              required
              maxlength="32"
              pattern="[A-Za-z\s]{1,32}"
              name="firstName"
              id="firstName"
              class=" placeholder:text-neutralGray invalid:border-pink-500 invalid:text-pink-600"
            />
            <label
              htmlFor="firstName"
              title="Nombres"
              data-title="Nombres"
            ></label>
            <span class="error">
              Este campo no puede estar vacío, e.g. John
            </span>
          </div>
          <div className="field md:w-1/2">
            <input
              type="text"
              name="lastName"
              id="lastName"
              class=" placeholder:text-neutralGray invalid:border-pink-500 invalid:text-pink-600"
              maxlength="32"
              pattern="[A-Za-z]{1,32}"
              required
            />
            <label
              htmlFor="lastName"
              title="Apellidos"
              data-title="Apellidos"
            ></label>
            <span class="error">Este campo no puede estar vacío, e.g. Doe</span>
          </div>
        </div>

        <div className="field">
          <input
            type="email"
            name="email"
            id="email"
            class=" placeholder:text-neutralGray
                invalid:border-pink-500 invalid:text-pink-600"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
          <label
            htmlFor="email"
            title="Correo electrónico"
            data-title="Correo electrónico"
            className="peer-invalid:text-pink-600"
          ></label>
          <span class="error">
            Este campo no puede estar vacío, e.g. correo@ejemplo.com
          </span>
        </div>

        <div className="field">
          <input
            type="tel"
            name="phone"
            id="phone"
            class=" placeholder:text-neutralGray
                focus:invalid:border-pink-500 invalid:text-pink-600"
            pattern="^\+[1-9]{1}[0-9]{3,14}$"
            required
          />
          <label
            htmlFor="phone"
            title="Número telefónico"
            data-title="Número telefónico"
          ></label>
          <span class="error">
            Este campo no puede estar vacío, e.g. +27 123 4567
          </span>
        </div>

        <div className="field">
          <textarea
            name="message"
            id="message"
            class="h-full placeholder:pt-2 placeholder:text-neutralGray
                focus:invalid:border-pink-500 invalid:text-pink-600"
            required
          ></textarea>
          <label
            htmlFor="message"
            title="Escribe un mensaje"
            data-title="Escribe un mensaje"
          ></label>
          <span class="error">Este campo no puede estar vacío</span>
        </div>
      </form>
      <div className="flex gap-4 w-full justify-between items-center">
        <div className="w-[50%]">
          <BtnFlatRed>Enviar mensaje</BtnFlatRed>
        </div>
        <div id="fail-send" className="hidden w-[50%]">
          <FormNoSent/>
        </div>
      </div>
    </div>
  );
}
