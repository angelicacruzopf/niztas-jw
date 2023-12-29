// FormNoSent.jsx
import React from "react";
import close from "../assets/img/icons/close-circle-w.png";


export default function FormNoSent() {
  return (
    <div className="flex gap-4 w-full">
      <div className="text-white flex gap-2 text-2xl items-center">
        <p>Error al enviar</p>
        <img
          src={close}
          alt="Icon close circle"
          className="object-cover w-6 h-6"
        />
      </div>
      {/* <div className="transition-opacity hover:opacity-50 hover:ease-in md:w-1/2">
        <BtnFlatRed>Intentar de nuevo</BtnFlatRed>
      </div> */}
    </div>
  );
}
