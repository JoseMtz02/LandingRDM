import { BsCloudHailFill } from "react-icons/bs";

export function HidalgoComponent() {
  return (
    <div className="absolute [font-family:Montserrat,sans-serif] top-[290px] left-[460px] h-[300px]">
      <p className="mt-2 font-bold text-2xl text-white">Hidalgo</p>
      <p className="mt-6 font-bold text-4xl text-white">Real del Monte</p>
      <p className="mt-2 text-xl text-white">
        Sientate frente a una de las bellas plazas del Pueblo
        <br />
        Magico, mientras saboreas un delicioso paste y luego
        <br />
        descubre sus rincones que conservan un dejo británico.
      </p>
      <p className="absolute text-white font-bold top-[245px] left-[60px]">Clima Actual</p>
      <p className="absolute text-white top-[268px] left-[60px]">Lluvia ligera</p>
      <p className="absolute text-4xl font-bold text-white top-[245px] left-[205px]">11°</p>
      <p className="absolute text-4xl text-white top-[245px] left-[274px]">|</p>
      <p className="absolute text-white top-[245px] left-[308px]">Humedad</p>
      <p className="absolute text-[21px] font-bold text-white top-[265px] left-[330px]">95%</p>
      <BsCloudHailFill className="mt-[-77px] text-white w-[35px] h-[300px]" />
    </div>
  );
}
