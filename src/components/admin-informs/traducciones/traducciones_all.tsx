import { FaLanguage } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { useState } from "react";


const truncateText = (text: string, maxLength: number = 24) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};


export default function Traducciones_all({ detalle }: { detalle: (id: number) => void }) {

  const textos = [
    {
      id:1,
      es:"ABIERTO TODOS LOS DÍAS",
      en:"OPEN EVERY DAY",
      pr:"ABERTO TODOS OS DIAS",
      ch:"每天开放"
    },
    {
      id:2,
      es:"ABIERTO TODOS LOS DÍAS",
      en:"OPEN EVERY DAY",
      pr:"ABERTO TODOS OS DIAS",
      ch:"每天开放"
    },
    {
      id:3,
      es:"ABIERTO TODOS LOS DÍAS",
      en:"OPEN EVERY DAY",
      pr:"ABERTO TODOS OS DIAS",
      ch:"每天开放"
    },
    {
      id:4,
      es:"ABIERTO TODOS LOS DÍAS",
      en:"OPEN EVERY DAY",
      pr:"ABERTO TODOS OS DIAS",
      ch:"每天开放"
    },
    {
      id:5,
      es:"ABIERTO TODOS LOS DÍAS",
      en:"OPEN EVERY DAY",
      pr:"ABERTO TODOS OS DIAS",
      ch:"每天开放"
    },
  ]
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = textos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
          <span className="flex flex-row gap-2">
            <FaLanguage className="text-3xl"/>
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
                  <p className="text-start pl-2">Id</p>
                </th>
                <th>
                  <p className="text-start">Español</p>
                </th>
                <th>
                  <p className="text-start">Inglés</p>
                </th>
                <th>
                  <p className="text-start">Portugués</p>
                </th>
                <th>
                  <p className="text-start">Chino</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((src, index) => (
                <tr
                  key={src.id}
                  className={`${
                    index % 2 === 0 ? "bg-blueD" : "bg-blueL"
                  } hover:text-blueB cursor-pointer h-12 text-sm`}
                  onClick={() => detalle(src.id)}
                >
                <td>
                  <p className="pl-2">
                    {src.id}
                  </p>
                </td>
                <td><p>{truncateText(src.es)}</p></td>
                <td><p>{truncateText(src.en)}</p></td>
                <td><p>{truncateText(src.pr)}</p></td>
                <td><p>{truncateText(src.ch)}</p></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
         {/* Paginación */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(textos.length / pageSize) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blueB text-white" : "bg-grayM text-grayL"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      </div>
    </>
  );
}
