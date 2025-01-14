"use client";

import { useState } from "react";
import Lateral_Menu from "@/components/admin/lateral_menu";
import Upper_Menu from "@/components/admin/upper_menu";
import Panoramic from "@/components/admin-informs/panoramic/panoramic";
import Reservas from "@/components/admin-informs/reservas/reservas";
import Discounts_All from "@/components/admin-informs/discounts/discounts-all";
import Discounts_New from "@/components/admin-informs/discounts/discounts-new";

export default function Dashboard() {
  const [menuExpanded, setMenuExpanded] = useState(true);
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const [selectedOption, setSelectedOption] = useState<string>("Home");
  
  console.log("selectedoption:",selectedOption);
  
  const renderContent = () => {
    switch (selectedOption) {
      case "Home":
        return <Panoramic />;
      case "Reservas":
        return <Reservas />;
      case "discounts-all":
        return <Discounts_All />;
      case "discounts-new":
        return <Discounts_New />;
      default:
        return <Panoramic />;
    }
  };

  return (
    <>
      <div
        className={`bg-blueD text-white w-screen relative
        ${menuExpanded ? "h-screen md:h-full" : "h-full"}
        `}
      >
        <div className="flex flex-row z-10">
          {/* lateral */}
          <div
            className={`${
              menuExpanded ? "hidden md:block md:w-1/6" : "w-1/5 md:w-1/12"
            } h-full transition-all duration-300`}
          >
            <Lateral_Menu 
            menuExpanded={menuExpanded} 
            onSelectOption={setSelectedOption}
            />
          </div>

          {/* upper */}
          <div
            className={`
            ${menuExpanded ? "w-full md:w-5/6" : "w-full md:w-11/12"}
            h-full transition-all duration-300`}
          >
            <Upper_Menu toggleMenu={toggleMenu} menuExpanded={menuExpanded} />
          </div>
        </div>

        {/* informs */}
        <div
          className={`bg-red-300 absolute top-16 z-0
          ${menuExpanded ? "left-2 md:left-60" : "left-20 md:left-32"}
          `}
        >
          {renderContent()}
        </div>
      </div>
    </>
  );
}
