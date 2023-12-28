import BtnFlat from "../components/buttons/BtnFlat";
import ventaNavidad  from "../assets/img/xmas-letters-red.png"
import bannerImg from "../assets/img/banner-img-desktop@2x.png"
import letrasBlancas from "../assets/img/xmas-letters-white.png"

console.log (ventaNavidad);

export default function Home() {

  return (
    <section id="hero" class="text-center flex flex-col md:flex-row items-center banner justify-between relative h-[800px] md:h-[600px] top-[50px]">
      <div class="hidden md:inline-block h-full w-1/2">
        <img src={bannerImg} alt="Sandalias" class="object-cover h-full w-full"/>
      </div>
      <div class="flex flex-col justify-evenly items-center w-[80%] md:w-1/2 h-[70%] md:bg-third py-20 md:h-full">
        <div class="w-full md:w-2/3 py-4">
            <h2 class="text-xl uppercase font-bold">Gran venta de</h2>
            <img src={ventaNavidad} alt="Letras rojas" class="w-full md:hidden"/>
            <img src={letrasBlancas} alt="Letras rojas" class="hidden md:inline-block w-full "/>
        </div>
        <div class="w-full flex flex-col items-center">
          <div class="mb-6 w-full">
            <h1 class="font-semibold text-2xl leading-12">Hasta el<br></br>
            <strong class="text-[64px] text-[#D62744] md:text-white">70%</strong><br></br>
            DE DESCUENTO
            </h1>
          </div>
            <div class="flex flex-row items-center justify-center w-[80%] md:w-[40%] max-w-[342px]">
                <BtnFlat>Ver ofertas</BtnFlat>
            </div>
        </div>
      </div>
    </section>
  );
};
