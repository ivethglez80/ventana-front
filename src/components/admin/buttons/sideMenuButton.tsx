

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

type SideMenuButtonProps = {
  icono: React.ElementType;
  opcion: string;
  dropArrow: boolean;
  menuExpanded: boolean;
  isActive: boolean;
  onToggleSubMenu: () => void;
  onSelectOption: (actionType: "new" | "all") => void;
};

const SideMenuButton: React.FC<SideMenuButtonProps> = ({
  icono: Icono,
  opcion,
  dropArrow,
  menuExpanded,
  isActive,
  onToggleSubMenu,
  onSelectOption,
}) => {
   const opcionSingular = opcion.slice(0, -1);

  return (
    <>
      <div
        className={`text-grayL hover:text-white mt-1 w-full flex flex-row text-xs md:text-sm
    ${menuExpanded ? "py-0" : "py-3"}    
    `}
    onClick={!dropArrow ? () => onSelectOption("all") : onToggleSubMenu}
      >
        <div
          className={`flex
    ${menuExpanded ? "w-3/4 justify-star" : "w-full justify-center"}
    `}
        >
          <div
            className={`flex items-center ${
              menuExpanded ? "flex-row gap-4" : "flex-col gap-0"
            } cursor-pointer transition-all`}
          >
            <Icono className="text-lg" />
            <p
              className={`font-poppins 
            ${menuExpanded ? "py-2" : "py-0"}
            `}
            >
              {opcion}
            </p>
          </div>
        </div>

        <div
          className={`${menuExpanded ? "w-1/4 block" : "w-0 hidden"}`}          
        >
          {dropArrow &&
            (isActive  ? (
              <RiArrowDropUpLine className="text-3xl text-end cursor-pointer" />
            ) : (
              <RiArrowDropDownLine className="text-3xl text-end cursor-pointer" />
            ))}
        </div>
      </div>

      {dropArrow && isActive  && (
        <div className="relative h-full ">
        <div className={`text-xs md:text-sm flex flex-col pb-2
        ${!menuExpanded 
          ? "absolute bg-grayD w-40 md:w-48 pl-2 md:pl-4 ml-16 md:ml-24 h-16 -translate-y-16" 
          : "block pl-6"
         }
        `}>
          <span className="flex flex-row gap-2 pt-2 items-center hover:text-white cursor-pointer"
          onClick={()=>{
            onSelectOption("new");
            onToggleSubMenu(); 
          }}
          >
            <GoDotFill />
            <p>Nuevo {opcionSingular}</p>
          </span>

          <span className="flex flex-row gap-2 pt-2 items-center hover:text-white cursor-pointer"
          onClick={()=>{
            onSelectOption("all");
            onToggleSubMenu();
          }}
          >
            <GoDotFill />
            <p>Ver {opcion}</p>
          </span>
        </div>
        </div>
      )}
    </>
  );
};

export default SideMenuButton;
