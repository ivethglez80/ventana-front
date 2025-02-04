import { FaMusic } from "react-icons/fa";
import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import React from "react";

const shows = [
  { id: 1, nombre: "Noche de Milonga", activo: false },
  { id: 2, nombre: "Carnaval de Río", activo: false },
  { id: 3, nombre: "Tributo a Piazzolla", activo: true },
  { id: 4, nombre: "Concierto de Jazz en Vivo", activo: false },
  { id: 5, nombre: "Gala de Ópera", activo: true },
  { id: 6, nombre: "Tango Clásico", activo: false },
  { id: 7, nombre: "Noche de Milonga", activo: true },
  { id: 8, nombre: "Ballet Folklórico", activo: false },
  { id: 9, nombre: "Gala de Ópera", activo: false },
  { id: 10, nombre: "Fiesta Latina", activo: false },
  { id: 11, nombre: "Show Adicional", activo: true },
  { id: 12, nombre: "Espectáculo de Fuegos", activo: false },
];

export default function Shows_all({
  detalle,
}: {
  detalle: (id: number) => void;
}) {
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openDetail, setOpenDetail] = useState<number | null>(null);

  const totalPages = Math.ceil(shows.length / pageSize);
  const paginatedData = shows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleDetail = (id: number) => {
    setOpenDetail((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FaMusic className="text-2xl" />
          <p className="text-lg">
            <b>Shows /</b> <span className="text-base">Lista</span>
          </p>
        </div>

        <div className="py-8 flex justify-between">
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
          <span className="flex flex-row gap-2 items-center">
            <p>Buscar:</p>
            <input type="text" placeholder="Buscar..." className="bg-grayM py-1 px-2 w-54" />
          </span>
        </div>

        {/* Contenedor scrollable */}
        <div className="max-h-[450px] overflow-y-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-start pl-2">ID</th>
                <th className="text-start pl-2">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((src, index) => (
                <React.Fragment key={src.id}>
                  <tr
                    className={`${
                      index % 2 === 0 ? "bg-blueD" : "bg-blueL"
                    } hover:text-blueB cursor-pointer`}
                  >
                    <td className="text-start pl-2 py-2 border-x-3 border-grayD">
                      <span className="flex flex-row gap-2 items-center">
                        {openDetail === src.id ? (
                          <FaCircleMinus
                            className="text-red-500 text-lg"
                            onClick={() => toggleDetail(src.id)}
                          />
                        ) : (
                          <FaCirclePlus
                            className="text-green-500 text-lg"
                            onClick={() => toggleDetail(src.id)}
                          />
                        )}
                        <span onClick={() => detalle(src.id)}>{src.id}</span>
                      </span>
                    </td>
                    <td className="text-start pl-2 py-2 border-x-3 border-grayD">{src.nombre}</td>
                  </tr>

                  {openDetail === src.id && (
                    <tr className="bg-grayD">
                      <td colSpan={4} className="p-4 border border-grayL">
                        <div className="w-full hover:text-grayL">
                          <span className="flex flex-row border-b-2 border-grayL w-full h-full">
                            <p className="w-1/4">Fecha</p>
                            <p className="text-sm text-end w-full">Todos los días</p>
                          </span>

                          <span className="flex flex-row border-b-2 border-grayL w-full">
                            <p className="w-1/4">Precio</p>
                            <p className="text-sm text-end w-full">USD$130.00</p>
                          </span>

                          <span className="flex flex-row border-b-2 border-grayL w-full">
                            <p className="w-1/4">Estado</p>
                            <span className="flex justify-end w-full">
                              <span className="flex flex-row gap-2 items-center">
                                {src.activo 
                                  ? <IoIosCheckbox className="text-blueB"/> 
                                  : <RiCheckboxIndeterminateFill className="text-red-500"/>
                                }                                                   
                              </span>
                            </span>
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
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
