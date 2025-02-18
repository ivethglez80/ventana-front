import { useState } from "react";
import SideMenuButton from "./buttons/sideMenuButton";
import { FcStatistics } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";

interface LateralMenuProps {
  menuExpanded: boolean;
  onSelectOption: (option: string) => void;
}

export default function Lateral_Menu({
  menuExpanded,
  onSelectOption,
}: LateralMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  const handleSubMenuToggle = (index: number) => {
    setActiveSubMenu((prev) => (prev === index ? null : index));
  };
  const user = {
    name: "Luciano",
  };
  const menuItems = [
    { icon: FcStatistics, option: "Estadísticas", dropArrow: false },
    { icon: FaShoppingCart, option: "Reservas", dropArrow: false },
    {
      icon: GiTicket,
      option: "Descuentos",
      dropArrow: true,
      new: "discounts-new",
      all: "discounts-all",
    },
    { icon: FaDollarSign, 
      option: "Pagos", 
      dropArrow: true, 
      new: "pagos-new",
      all: "pagos-all"
    },
    { icon: FaMusic, 
      option: "Shows", 
      dropArrow: true, 
      new: "shows-new",
      all: "shows-all"
    },
    { icon: FaBook, 
      option: "Menús", 
      dropArrow: true, 
      new: "menus-new",
      all: "menus-all"
    },
    { icon: HiChatBubbleLeft, 
      option: "Opiniones", 
      dropArrow: true, 
      new: "opiniones-new",
      all: "opiniones-all"
    },
    { icon: BsNewspaper, option: "Suscripciones", dropArrow: false },
    { icon: AiOutlinePicture, 
      option: "Galeria Menús", 
      dropArrow: true, 
      new: "galeriaMenus-new",
      all: "galeriaMenus-all"
    },
    { icon: AiOutlinePicture, 
      option: "Galeria Shows", 
      dropArrow: true, 
      new: "galeriaShows-new",
      all: "galeriaShows-all"
    },
    { icon: FaLanguage, 
      option: "Traducciones", 
      dropArrow: true,
      new: "traducciones-new",
      all: "traducciones-all" 
    },
    { icon: IoSettingsSharp, option: "Configuración", dropArrow: false },
    { icon: FaUsers, 
      option: "Usuarios", 
      dropArrow: true,
      new: "usuarios-new",
      all: "usuarios-all" 
    },
  ];
  return (
    <>
      <div className="bg-grayD text-grayL relative z-10">
        <div className="bg-grayA h-14 flex justify-center items-center">
          <p
            className={`text-grayL ${
              menuExpanded
                ? "text-base md:text-xl"
                : "text-sm md:text-base text-center"
            } font-medium`}
          >
            La Ventana
          </p>
        </div>

        <div className="h-full ">
          <div
            className={`flex flex-row justify-start gap-4 py-4 pl-8
                    ${menuExpanded ? "block" : "hidden"}
                    `}
          >
            <span>
              <RxAvatar className="text-5xl" />
            </span>
            <span className="font-semibold">
              <p>Hola!</p>
              <p>{user.name}</p>
            </span>
          </div>
        </div>

        <div>
          <ul
            className={`w-full h-full
                ${menuExpanded ? "pl-8 pb-[1200px]" : "pl-0 pb-6"}
                `}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <SideMenuButton
                  icono={item.icon}
                  opcion={item.option}
                  dropArrow={item.dropArrow}
                  menuExpanded={menuExpanded}
                  isActive={activeSubMenu === index}
                  onToggleSubMenu={() => handleSubMenuToggle(index)}                  
                    onSelectOption={(actionType) =>
                      onSelectOption(
                        !item.dropArrow
                          ? item.option
                          : actionType === "new"
                          ? item.new || item.option
                          : item.all || item.option
                      )
                    }
                />
              </li>
            ))}
          </ul>
        </div>

        {menuExpanded && (
          <div className="bg-grayA hidden md:block h-12 bottom-0 fixed w-1/6 border-t-2 border-grayL">
            <span className="flex  justify-center items-center h-full w-full">
              <FaPowerOff className="text-xl hover:text-white" />
            </span>
          </div>
        )}
      </div>
    </>
  );
}
