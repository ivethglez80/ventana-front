import { FaBook } from "react-icons/fa";
import { ImFilePdf } from "react-icons/im";
import Switcher4 from "@/components/admin/buttons/toggleSwitch";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Menus_all({ detalle }: { detalle: (id: number) => void }) {
  const menus = [
    {
      id: 1,
      nombre: "menu cena show",
      menu_es: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_en: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_pr: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_ch: "/dashbrd/Catecismo de Spurgeon.pdf",
      estado: true,
    },
    {
      id: 2,
      nombre: "menu cena show",
      menu_es: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_en: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_pr: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_ch: "/dashbrd/Catecismo de Spurgeon.pdf",
      estado: true,
    },
    {
      id: 3,
      nombre: "menu cena show",
      menu_es: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_en: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_pr: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_ch: "/dashbrd/Catecismo de Spurgeon.pdf",
      estado: false,
    },
    {
      id: 4,
      nombre: "menu cena show",
      menu_es: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_en: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_pr: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_ch: "/dashbrd/Catecismo de Spurgeon.pdf",
      estado: true,
    },
    {
      id: 5,
      nombre: "menu cena show",
      menu_es: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_en: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_pr: "/dashbrd/Catecismo de Spurgeon.pdf",
      menu_ch: "/dashbrd/Catecismo de Spurgeon.pdf",
      estado: false,
    },
  ];

  
  const [estado, setEstado] = useState<Record<number, boolean>>(
    menus.reduce((acc, menu) => ({ ...acc, [menu.id]: menu.estado }), {})
  );

  
  const toggleEstado = (id: number) => {
    setEstado((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  
  const handleOpenPDF = (url: string) => {
    window.open(url, "_blank");
  };

  const EliminaRegistro = () => {
    alert("esta seguro que quiere eliminar el registro?")
}

const [pageSize, setPageSize] = useState<number>(10);

  return (
    <div className="bg-grayD h-full w-full md:w-[900px] rounded-xl text-grayL px-6 pb-6">
      <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
        <FaBook className="text-2xl" />
        <p className="text-lg">
          <b> Menú /</b> <span className="text-base">Lista</span>
        </p>
      </div>

      <div className="pt-6">
      <span className="flex flex-row gap-2 items-center">
          <p>Mostrar</p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-grayM p-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p>registros</p>
        </span>
      </div>
      
      <div className="pt-6">
        <table className="w-full">
          <thead>
            <tr>
              <th>
                <p className="text-start pl-2">
                  Nombre
                </p>
              </th>
              <th>
                <p>Menú español</p>
              </th>
              <th>
                <p>Menú inglés</p>
              </th>
              <th>
                <p>Menú portugués</p>
              </th>
              <th>
                <p>Menú chino</p>
              </th>
              <th>
                <p>Estado</p>
              </th>
              <th>
                <p>!</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {menus.map((src,index) => (
              <tr key={src.id}  className={`h-12
                ${index % 2 === 0 ? "bg-blueD" : "bg-blueL"}
                `}>
                <td>
                  <p className="pl-2 hover:text-blueB cursor-pointer" onClick={() => detalle(src.id)}>
                  {src.nombre}
                  </p>
                </td>
                <td>
                  <button onClick={() => handleOpenPDF(src.menu_es)} className="flex justify-center w-full items-center">
                    <ImFilePdf className="cursor-pointer text-2xl hover:text-blueB" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleOpenPDF(src.menu_en)} className="flex justify-center w-full items-center">
                    <ImFilePdf className="cursor-pointer text-2xl hover:text-blueB" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleOpenPDF(src.menu_pr)} className="flex justify-center w-full items-center">
                    <ImFilePdf className="cursor-pointer text-2xl hover:text-blueB" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleOpenPDF(src.menu_ch)} className="flex justify-center w-full items-center">
                    <ImFilePdf className="cursor-pointer text-2xl hover:text-blueB" />
                  </button>
                </td>
                <td>
                  <Switcher4 isChecked={estado[src.id]} onToggle={() => toggleEstado(src.id)} />
                </td>
                <td className="hover:text-blueB pr-2">
                  <BsTrash3 onClick={EliminaRegistro}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
