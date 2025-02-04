"use client";

import { useState } from "react";
import Lateral_Menu from "@/components/admin/lateral_menu";
import Upper_Menu from "@/components/admin/upper_menu";
import Panoramic from "@/components/admin-informs/panoramic/panoramic";
import Reservas from "@/components/admin-informs/reservas/reservas";
import ReservaDetalle from "../../../components/admin-informs/reservas/reservasDetalle";
import Discounts_All from "@/components/admin-informs/discounts/discounts-all";
import Discounts_New from "@/components/admin-informs/discounts/discounts-new";
import Discount_modify from "@/components/admin-informs/discounts/discounts-modify";
import Pagos_All from "@/components/admin-informs/pagos/pagos_all";
import Pagos_new from "@/components/admin-informs/pagos/pagos_new";
import Pago_Detalle from "@/components/admin-informs/pagos/moduloDetalle/pagosDetalle";
import Shows_all from "@/components/admin-informs/shows/shows_all";
import Shows_new from "@/components/admin-informs/shows/shows_new";
import Show_Detalle from "@/components/admin-informs/shows/moduloDetalle/showDetalle";
import Menus_new from "@/components/admin-informs/menus/menus_new";
import Menus_all from "@/components/admin-informs/menus/menus_all";
import Menu_detalle from "@/components/admin-informs/menus/menu_detalle";
import Opiniones_all from "@/components/admin-informs/opiniones/opiniones_all";
import Opiniones_new from "@/components/admin-informs/opiniones/opiniones_new";
import Opiniones_mod from "@/components/admin-informs/opiniones/opiniones_mod";
import Suscripciones from "@/components/admin-informs/suscripciones/suscripciones";
import GaleriaMenus_new from "@/components/admin-informs/galeriaMenus/galeriaMenus_new";
import GaleriaMenus_all from "@/components/admin-informs/galeriaMenus/galeriaMenus_all";
import GaleriaShows_new from "@/components/admin-informs/galeriaShows/galeriaShows_new";
import GaleriaShows_all from "@/components/admin-informs/galeriaShows/galeriaShows_all";
import Traducciones_new from "@/components/admin-informs/traducciones/traducciones_new";
import Traducciones_all from "@/components/admin-informs/traducciones/traducciones_all";
import Traducciones_detalle from "@/components/admin-informs/traducciones/traducciones_detalle";
import Settings from "@/components/admin-informs/settings/settings";
import Users_new from "@/components/admin-informs/Users/users_new";
import Users_all from "@/components/admin-informs/Users/users_all";
import Users_detalle from "@/components/admin-informs/Users/users_detalle";

type Discount = {
  codigo: string;
  descuento: string;
};

type Opinion = {
  id: number;
  langId: number;
  img: string;
  name: string;
  title: string;
  text: string;
  valor: number;
  date: string;
  status: boolean;
};


export default function Dashboard() {
  const [menuExpanded, setMenuExpanded] = useState(true);
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const [selectedOption, setSelectedOption] = useState<string>("Home");
  const [editingDiscount, setEditingDiscount] = useState<Discount  | null>(null);
  const [editingOpinion, setEditingOpinion] = useState<Opinion  | null>(null);
  const [selectedReservationId, setSelectedReservationId] = useState<number | null>(null);
  const [selectedPagoId, setSelectedPagoId] = useState<number | null>(null);
  const [selectedShowId, setSelectedShowId] = useState<number | null>(null);
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [selectedTraduccionId, setSelectedTraduccionId] = useState<number | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  console.log("selectedOption:", selectedOption);

  // const handleOptionChange = (option: string) => {
  //   setEditingDiscount(null); 
  //   setSelectedOption(option);
  // };
  const renderContent = () => {
    if (selectedOption === "discounts-modify" && editingDiscount) {
      return (
        <Discount_modify
          opcion={editingDiscount.codigo}
          descuento={editingDiscount.descuento}
        />
      );
    }
    if (selectedOption === "opiniones_modify" && editingOpinion) {
      return (
        <Opiniones_mod  opinion={editingOpinion} />
      )
    }
    if (selectedOption === "reserva-detalle" && selectedReservationId !== null) {
      return (
        <ReservaDetalle
          id={selectedReservationId!}         
        />
      );
    }
    if (selectedOption === "pago-detalle" && selectedPagoId !== null) {
      return (
        <Pago_Detalle
          id={selectedPagoId!}         
        />
      );
    }
    if (selectedOption === "show-detalle" && selectedShowId !== null) {
      return (
        <Show_Detalle
          id={selectedShowId!}         
        />
      );
    }
    if (selectedOption === "menu-detalle" && selectedMenuId !== null) {
      return (
        <Menu_detalle
          id={selectedMenuId!}         
        />
      );
    }
    if (selectedOption === "traduccion-detalle" && selectedTraduccionId !== null) {
      return (
        <Traducciones_detalle
          id={selectedTraduccionId!}         
        />
      );
    }
    if (selectedOption === "user-detalle" && selectedUserId !== null) {
      return (
        <Users_detalle
          id={selectedUserId!}         
        />
      );
    }
    switch (selectedOption) {
      case "Home":
        return <Panoramic />;
      
        case "Reservas":
        return (
          <Reservas
          detalle={(id) => {
            setSelectedReservationId(id);
            setSelectedOption("reserva-detalle");
          }}
        />
      );
        case "discounts-all":
          return (
            <Discounts_All
              onEdit={(descuento) => {
                setEditingDiscount(descuento);
                setSelectedOption("discounts-modify");
              }}
            />
          );
      case "discounts-new":
        return <Discounts_New />;
      case "pagos-all":
        return (
          <Pagos_All
          detalle={(id) => {
            setSelectedPagoId(id);
            setSelectedOption("pago-detalle");
          }}
        />
      );       
      case "pagos-new":
        return <Pagos_new />  
      case "shows-all":
        return (
          <Shows_all
            detalle={(id) => {
            setSelectedShowId(id);
            setSelectedOption("show-detalle");
          }}
        />
      );  
      case "shows-new":
        return <Shows_new />
      case "menus-new":
        return <Menus_new />
      case "menus-all":
        return (
          <Menus_all
            detalle={(id) => {
            setSelectedMenuId(id);
            setSelectedOption("menu-detalle");
          }}
        />
      );  
      case "opiniones-new":
        return <Opiniones_new />  
      case "opiniones-all":
        return <Opiniones_all
        onEdit={(opinion) => {
          setEditingOpinion(opinion); 
          setSelectedOption("opiniones_modify")
        }}
        />
      case "Suscripciones":
        return <Suscripciones />
      case "galeriaMenus-new":
        return <GaleriaMenus_new />
      case "galeriaMenus-all":
        return <GaleriaMenus_all />
      case "galeriaShows-new":
        return <GaleriaShows_new />
      case "galeriaShows-all":
        return <GaleriaShows_all />
      case "traducciones-new":
        return <Traducciones_new />
      case "traducciones-all":
        return (
          <Traducciones_all
            detalle={(id) => {
            setSelectedTraduccionId(id);
            setSelectedOption("traduccion-detalle");
          }}
        />
      );  
      case "Configuración":
        return <Settings />
      case "usuarios-new":
        return <Users_new />
      case "usuarios-all":
        return (
          <Users_all
            detalle={(id) => {
            setSelectedUserId(id);
            setSelectedOption("user-detalle");
          }}
        />
      );  

      default:
        return <Panoramic />;
    }
  };

  return (
    <>
      <div
        className={`bg-blueD text-white w-full relative
        ${menuExpanded ? "h-full" : "h-full"}
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
            onSelectOption={(option) => {
              setSelectedOption(option);
              if (option !== "reserva-detalle") {
                setSelectedReservationId(null);}
            }}
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
          className={`absolute top-16 z-0 bg-blueD pb-8
          ${menuExpanded ? "left-2 md:left-60 w-full pr-4" : "left-20 md:left-32"}
          `}
        >
          {renderContent()}
        </div>

      </div>
    </>
  );
}
