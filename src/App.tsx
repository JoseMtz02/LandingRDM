import "./App.css";
import SlidersPage from "./views/section-sliders/SlidersSection";
import BannerMain from "./components/BannerMain";
import { Sidebar } from "./components/SidebarComponent";
import Information from "./components/Information";
import useIsVisible from "./hook/useVisible";
import { useRef } from "react";

function App() {
  const [slidersRef, isSlidersVisible] = useIsVisible();
  const [infoRef, isInfoVisible] = useIsVisible();
  const infoScrollRef = useRef<HTMLDivElement>(null);


  const isShadowActive = isInfoVisible || isSlidersVisible;

  return (
    <>
      <Sidebar isSlidersVisible={isShadowActive} />
      <BannerMain infoScrollRef={infoScrollRef} />
      <div ref={infoRef} >
        <div ref={infoScrollRef}>
          <Information />
        </div>
      </div>
      <div ref={slidersRef}>
        <SlidersPage />
      </div>
    </>
  );
}

export default App;