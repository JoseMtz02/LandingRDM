import "./App.css";
import SlidersPage from "./views/section-sliders/SlidersSection";
import BannerMain from "./components/BannerMain";
import { Sidebar } from "./components/SidebarComponent";
import useIsVisible from "./hook/useVisible";

function App() {
  const [slidersRef, isSlidersVisible] = useIsVisible();

  return (
    <>
      <Sidebar isSlidersVisible={isSlidersVisible} />
      <BannerMain />

      <div ref={slidersRef}>
        <SlidersPage />
      </div>

    </>
  );
}

export default App;