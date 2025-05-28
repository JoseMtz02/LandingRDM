import LogoMain from "./global/LogoMain";
import { HidalgoComponent } from "./HidalgoComponent";

export default function BannerMain() {
  return (
    <>
      <LogoMain />
      <div className="">
        <img
          src="/images/imagen-landing.jpg"
          alt="Banner"
          className="w-full h-[auto] object-contain"
        />
        <div className="absolute w-full mt-[-1000px] bg-gradient-to-b from-white-100 via-neutral-900 to-black p-[500px] opacity-80" />
        <HidalgoComponent />
      </div>
    </>
  );
}
