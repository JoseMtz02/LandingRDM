import "./App.css";
import SlidersPage from "./views/section-sliders/SlidersSection";
import BannerMain from "./components/BannerMain";
import { Sidebar } from "./components/SidebarComponent";

function App() {
  return (
    <>
      <Sidebar />
      <BannerMain />
      <SlidersPage />

    </>
  );
}

export default App;