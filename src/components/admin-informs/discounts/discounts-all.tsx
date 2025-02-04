import { GiTicket } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import Switcher4 from "@/components/admin/buttons/toggleSwitch";

interface Descuento {
  id: number;
  codigo: string;
  descuento: string;
  estado: boolean;
}

export default function Discounts_All({ onEdit }: { onEdit: (descuento: Descuento) => void }) {
  const [descuentos, setDescuentos] = useState<Descuento[]>([
    { id: 1, codigo: "escuelas", descuento: "30%", estado: true },
    { id: 2, codigo: "verano", descuento: "20%", estado: true },
    { id: 3, codigo: "amigos", descuento: "50%", estado: false },
    { id: 4, codigo: "primavera", descuento: "15%", estado: true },
    { id: 5, codigo: "navidad", descuento: "25%", estado: false },
    { id: 6, codigo: "oferta1", descuento: "10%", estado: true },
    { id: 7, codigo: "rebajas", descuento: "40%", estado: false },
    { id: 8, codigo: "especial", descuento: "35%", estado: true },
    { id: 9, codigo: "final", descuento: "50%", estado: false },
    { id: 10, codigo: "cliente", descuento: "5%", estado: true },
  ]);

  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(descuentos.length / pageSize);
  const paginatedData = descuentos.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleEstado = (id: number) => {
    setDescuentos((prev) =>
      prev.map((desc) => (desc.id === id ? { ...desc, estado: !desc.estado } : desc))
    );
  };

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <GiTicket className="text-2xl" />
          <p className="text-lg">
            <b>Descuento /</b> <span className="text-base">Lista</span>
          </p>
        </div>

        <div className="pt-6 pb-4 flex justify-between">
          <span className="flex flex-row gap-2 items-center">
            <p>Mostrar</p>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-grayM p-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <p>registros</p>
          </span>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          <table className="table-auto w-full">
            <thead className="text-white">
              <tr>
                <th className="text-start pl-2 md:pl-4">ID</th>
                <th className="text-start pl-2 md:pl-4 uppercase">Código</th>
                <th className="text-start pl-2 md:pl-4">Descuento</th>
                <th className="text-start pl-2 md:pl-4">Estado</th>
                <th className="text-start pl-2 md:pl-4">!</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((desc, index) => (
                <tr
                  key={desc.id}
                  className={`${
                    index % 2 === 0 ? "bg-blueD" : "bg-blueL"
                  } border-2 border-b-grayD border-t-0 border-l-0`}
                >
                  <td
                    className="bg-grayM pl-2 md:pl-4 cursor-pointer"
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
                    <Switcher4 isChecked={desc.estado} onToggle={() => toggleEstado(desc.id)} />
                  </td>
                  <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4 hover:text-blueB ">
                    <BsTrash3 />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
