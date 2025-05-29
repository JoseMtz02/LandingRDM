import "./App.css";
import SlidersPage from "./views/section-sliders/SlidersSection";
import BannerMain from "./components/BannerMain";
import { Sidebar } from "./components/SidebarComponent";
import Information from "./components/Information";
import useIsVisible from "./hook/useVisible";

function App() {
  const [slidersRef, isSlidersVisible] = useIsVisible();

  return (
    <>
      <Sidebar isSlidersVisible={isSlidersVisible} />
      <BannerMain />
      <Information/>
      <SlidersPage />

      <div ref={slidersRef}>
        <SlidersPage />
      </div>


    </>
  );
}

export default App;