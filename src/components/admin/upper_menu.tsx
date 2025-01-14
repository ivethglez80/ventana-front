"use client";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";


interface UpperMenuProps {
    toggleMenu: () => void;
    menuExpanded: boolean;
  }


export default function Upper_Menu({toggleMenu, menuExpanded }: UpperMenuProps) {  

  const [dropOption, setDropOption] = useState(false);
  const toggleDrop = () => {
    setDropOption(!dropOption);
  };

  return (
    <>
      <div className="h-14 w-full bg-grayD flex justify-between">
        <span onClick={toggleMenu} className="flex items-center pl-2 cursor-pointer">          
        {
          menuExpanded ? (
            <RiMenuFold3Fill className="text-3xl text-grayL" />                              
       
          ):(
       
            <RiMenuFold4Fill className="text-3xl text-grayL" />                              
          )
        }
        </span>

        <span className="flex flex-row gap-2 text-grayL items-center mr-8">
          <RxAvatar className="text-3xl" />
          <p className="font-semibold ">Luciano</p>
          {dropOption ? (
            <IoMdArrowDropup className="text-2xl " onClick={toggleDrop} />
          ) : (
            <IoMdArrowDropdown className="text-2xl " onClick={toggleDrop} />
          )}
          {dropOption && (
            <div className="absolute mt-20 ml-6 py-2 px-4 rounded-xl
            bg-black flex flex-row items-center gap-2 hover:bg-slate-700">
              <TbLogout2 className="text-2xl text-grayL " />
              <p className="">
                Log Out
            </p>
            </div>
          )}
        </span>
      </div>
    </>
  );
}
