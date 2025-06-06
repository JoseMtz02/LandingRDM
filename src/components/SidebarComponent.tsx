import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { BsSignpost2 } from "react-icons/bs";
import { GiByzantinTemple } from "react-icons/gi";
import { GiKite } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { MdRestaurant, MdOutlineMenu } from "react-icons/md";
import { FiCamera } from "react-icons/fi";

const menuItems = [
  { icon: <FiHome />, label: "Inicio" },
  { icon: <IoIosSearch />, label: "Buscar" },
  { icon: <BsSignpost2 />, label: "Señalamiento" },
  { icon: <GiByzantinTemple  />, label: "Vive su Magía" },
  { icon: <GiKite />, label: "Festividades" },
  { icon: <FaHotel />, label: "Hoteles" },
  { icon: <MdRestaurant />, label: "Restaurantes" },
  { icon: <FiCamera />, label: "Tours" },
  { icon: <MdOutlineMenu />, label: "Menú" },
];
interface SidebarProps {
  isSlidersVisible: boolean;
}

export function Sidebar({isSlidersVisible} : SidebarProps) {
  return (
    <aside className={`sidebar ${isSlidersVisible ? "with-shadow" : ""}`}>
      <nav className="menu">
        {menuItems.map(({ icon, label }, idx) => (
          <div className="menu-item" key={idx}>
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

