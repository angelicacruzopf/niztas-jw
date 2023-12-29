import sent from "../assets/img/icons/sent-w.png";
import check from "../assets/img/icons/check-w.png";
import BtnFlat from "./buttons/BtnFlat";

export default function FormSent() {
  return (
    <div className="w-full flex flex-col items-center gap-12 py-16">
      <div>
        <img src={sent} alt="ícono mensaje enviado" />
      </div>
      <div className="flex gap-4 justify-between w-full">
        <div className="text-white flex gap-4 items-center">
          <p>Mensaje enviado</p>
          <img src={check} alt="Icon check" className="w-6 h-6 object-cover" />
        </div>
        <div>
          <BtnFlat>Enviar otro mensaje</BtnFlat>
        </div>
      </div>
    </div>
  );
}
