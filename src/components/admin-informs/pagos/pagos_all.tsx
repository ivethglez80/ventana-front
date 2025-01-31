import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import React from "react";


const pagos_data = [
    { id: 1, fecha: "2025-03-15T20:00:00Z", titulo: "Cena Show", nombre: "Carlos López", pagado: false },
    { id: 2, fecha: "2025-03-16T21:30:00Z", titulo: "Noche de Tango", nombre: "María González", pagado: true },
    { id: 3, fecha: "2025-03-17T19:45:00Z", titulo: "Cena Show", nombre: "Javier Rodríguez", pagado: false },
    { id: 4, fecha: "2025-03-18T22:00:00Z", titulo: "Flamenco Night", nombre: "Ana Fernández", pagado: true },
    { id: 5, fecha: "2025-03-19T20:15:00Z", titulo: "Cena Show", nombre: "Diego Martínez", pagado: false },
    { id: 6, fecha: "2025-03-20T19:30:00Z", titulo: "Música en Vivo", nombre: "Laura Pérez", pagado: false },
    { id: 7, fecha: "2025-03-21T21:00:00Z", titulo: "Cena Show", nombre: "Fernando García", pagado: true },
    { id: 8, fecha: "2025-03-22T20:45:00Z", titulo: "Noche de Boleros", nombre: "Sofía Ramírez", pagado: false },
    { id: 9, fecha: "2025-03-23T22:30:00Z", titulo: "Cena Show", nombre: "Alejandro Torres", pagado: true },
    { id: 10, fecha: "2025-03-24T19:00:00Z", titulo: "Espectáculo de Folklore", nombre: "Valentina Herrera", pagado: true }  
];

export default function Pagos_All({
  detalle,
}: {
  detalle: (id: number) => void;
}) {
  const [pageSize, setPageSize] = useState<number>(10);
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const toggleDetail = (id: number) => {
    setOpenDetail((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-grayD h-full w-full md:w-[1000px] rounded-xl text-grayL px-6 pb-6">
      <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
        <FaDollarSign className="text-2xl" />
        <p className="text-lg">
          <b>Pagos /</b> <span className="text-base">Lista</span>
        </p>
      </div>

      <div className="py-8 flex justify-between">
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
        <span className="flex flex-row gap-2 items-center">
          <p>Buscar:</p>
          <input type="text" placeholder="Buscar..." className="bg-grayM py-1 px-2 w-54" />
        </span>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-start pl-2">ID</th>
            <th className="text-start pl-2">Fecha</th>
            <th className="text-start pl-2">Título</th>
            <th className="text-start pl-2">Nombre y Apellido</th>
          </tr>
        </thead>
        <tbody>
          {pagos_data.map((src, index) => (
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
                <td className="text-start pl-2 py-2 border-x-3 border-grayD">{src.fecha}</td>
                <td className="text-start pl-2 py-2 border-x-3 border-grayD">{src.titulo}</td>
                <td className="text-start pl-2 py-2 border-x-3 border-grayD">{src.nombre}</td>
              </tr>

              {/* Fila de detalles, ahora dentro de la tabla con un <td> con colspan */}
              {openDetail === src.id && (
                <tr className="bg-grayD">
                  <td colSpan={4} className="p-4 border border-grayL">
                    <div className="w-full hover:text-grayL">
                      <span className="flex flex-row border-b-2 border-grayL w-full h-full">
                        <p className="w-1/4">Email</p>
                        <p className="text-sm text-end w-full">omar.cidane@gmail.com</p>
                      </span>

                      <span className="flex flex-row border-b-2 border-grayL w-full">
                        <p className="w-1/4">Precio</p>
                        <p className="text-sm text-end w-full">$10.00</p>
                      </span>

                      <span className="flex flex-row border-b-2 border-grayL w-full">
                        <p className="w-1/4">Estado</p>
                        <span className="flex justify-end w-full">
                          <span className="flex flex-row gap-2">
                            {src.pagado ? <FaCheck /> : <CgDanger />}
                            <p className="text-sm text-end w-full">
                              {src.pagado ? "APROBADO" : "PENDIENTE"}
                            </p>
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
  );
}