import { FaLanguage } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import BlueButton from "@/components/admin/buttons/blueButton";
import { useState } from "react";

export default function Traducciones_all() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
          <span className="flex flex-row gap-2">
            <p className="text-lg">
              <b>Traducciónes /</b> <span className="text-base">Lista</span>
            </p>
          </span>
          <button className="bg-blueB text-white hover:brightness-75 py-3 px-8 rounded-lg">
            <span className="flex flex-row gap-2 items-center">
              <TiPlus />
              <p className="text-lg">Nueva traducción</p>
            </span>
          </button>
        </div>

        <div className="pt-6 pb-16">
          <span className="flex flex-col md:flex-row justify-between">
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
            <span className="flex flex-row items-center">
              <p>Buscar:</p>
              <input className="inputDash" />
            </span>
          </span>
        </div>

        <div className="max-h-[450px] overflow-y-auto w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <p className="text-start pl-2">Español</p>
                </th>
                <th>
                  <p className="text-start pl-2">Inglés</p>
                </th>
                <th>
                  <p className="text-start pl-2">Portugués</p>
                </th>
                <th>
                  <p className="text-start pl-2">Chino</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
