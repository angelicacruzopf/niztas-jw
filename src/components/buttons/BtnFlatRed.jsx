import React from "react";

export default function BtnFlatRed({ children }) {
  return (
    <button
      type="submit"
      className="bg-[#252627] text-white py-2 px-4 font-semibold text-lg flex gap-2 items-center justify-center w-full hover:bg-black transition-all ease-in"
    >
      {children}
    </button>
  );
}
