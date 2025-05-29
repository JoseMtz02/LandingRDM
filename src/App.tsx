import "./App.css";
import SlidersPage from "./views/section-sliders/SlidersSection";
import BannerMain from "./components/BannerMain";
import { Sidebar } from "./components/SidebarComponent";
import Information from "./components/Information";

function App() {
  return (
    <>
      <Sidebar />
      <BannerMain />
      <Information/>
      <SlidersPage />

    </>
  );
}

export default App;