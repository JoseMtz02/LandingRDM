import type { RefObject } from "react";
import LogoMain from "./global/LogoMain";
import { HidalgoComponent } from "./HidalgoComponent";

interface BannerMainProps {
  infoScrollRef: RefObject<HTMLDivElement | null>;
}

export default function BannerMain({ infoScrollRef }: BannerMainProps) {
  const handleScroll = () => {
    if (infoScrollRef.current) {
      try {
        const offsetTop = infoScrollRef.current.getBoundingClientRect().top + window.scrollY - 70; // Restamos 50px
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      } catch (error) {
        const offsetTop = infoScrollRef.current.getBoundingClientRect().top + window.scrollY - 70; // Restamos 50px
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <LogoMain />
      <div className="relative">
        <img
          src="/images/imagen-landing.jpg"
          alt="Banner"
          className="w-full h-[auto] object-contain"
        />
        <div className="absolute w-full mt-[-1000px] bg-gradient-to-b from-white-100 via-neutral-900 to-black p-[500px] opacity-80" />
        <HidalgoComponent />
        <button
          onClick={handleScroll}
          className="absolute top-[calc(100%-26rem)] left-5/10 pl-40 transform -translate-x-1/2 text-white font-bold px-6 py-2 rounded-full z-20"
        >
          Conoce más <br/>
          ↓
        </button>
      </div>
    </>
  );
}
