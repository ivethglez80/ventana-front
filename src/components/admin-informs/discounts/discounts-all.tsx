

import { GiTicket } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import Switcher4 from "@/components/admin/buttons/toggleSwitch";



export default function Discounts_All({ onEdit }: { onEdit: (descuento: any) => void }) {
  const [descuentos, setDescuentos] = useState([
    {
      id: 1,
      codigo: "escuelas",
      descuento: "30%",
      estado: true,
    },
    {
      id: 2,
      codigo: "verano",
      descuento: "20%",
      estado: true,
    },
    {
      id: 3,
      codigo: "amigos",
      descuento: "50%",
      estado: false,
    },
    
  ]);

  const toggleEstado = (id: number) => {
    setDescuentos((prev) =>
      prev.map((desc) =>
        desc.id === id ? { ...desc, estado: !desc.estado } : desc
      )
    );
  };
  const [pageSize, setPageSize] = useState<number>(10);
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <GiTicket className="text-2xl" />
          <p className="text-lg">
            <b>Descuento /</b> <span className="text-base">Lista</span>
          </p>
        </div>

        <div className="pt-12 pb-16">
          <span className="flex flex-col md:flex-row justify-between">
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
            <span className="flex flex-row items-center">
              <p>Buscar:</p>
              <input className="inputDash" />
            </span>
          </span>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          <table className="table-auto w-full">
            <thead className="text-white">
              <tr>
                <th className="text-start pl-2 md:pl-4">id</th>
                <th className="text-start pl-2 md:pl-4 uppercase">Código</th>
                <th className="text-start pl-2 md:pl-4">Descuento</th>
                <th className="text-start pl-2 md:pl-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {descuentos.map((desc, index) => (
                <tr
                  key={index}
                  className="border-2 border-b-grayD border-t-0 border-l-0"
                >
                  <td className="bg-grayM pl-2 md:pl-4"
                  onClick={() => onEdit(desc)}
                  >
                    {desc.id}
                    </td>
                  <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                    {desc.codigo}
                  </td>
                  <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                    {desc.descuento}
                  </td>                  
                  <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4 cursor-pointer">                    
                 <Switcher4
                    isChecked={desc.estado}
                    onToggle={() => toggleEstado(desc.id)}
                  />
                
                  </td>
                  <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4 hover:text-blueB ">
                    <BsTrash3 />
                  </td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
