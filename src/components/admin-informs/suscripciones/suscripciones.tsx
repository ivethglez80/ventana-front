import { BsNewspaper } from "react-icons/bs";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { formatDateTime } from "@/components/admin/utils/dateUtils";
import BlueButton from "@/components/admin/buttons/blueButton";
import { FaRegFileExcel } from "react-icons/fa";

export default function Suscripciones() {
  const suscripciones_data = [
    {
      id: 1,
      date: "2025-02-03T13:46:25.444701",
      email: "user1@mail.com",
    },
    {
      id: 2,
      date: "2025-02-03T13:46:25.444708",
      email: "user2@mail.com",
    },
    {
      id: 3,
      date: "2025-02-03T13:46:25.444710",
      email: "user3@mail.com",
    },
    {
      id: 4,
      date: "2025-02-03T13:46:25.444712",
      email: "user4@mail.com",
    },
    {
      id: 5,
      date: "2025-02-03T13:46:25.444713",
      email: "user5@mail.com",
    },
    {
      id: 6,
      date: "2025-02-03T13:46:25.444715",
      email: "user6@mail.com",
    },
    {
      id: 7,
      date: "2025-02-03T13:46:25.444717",
      email: "user7@mail.com",
    },
    {
      id: 8,
      date: "2025-02-03T13:46:25.444720",
      email: "user8@mail.com",
    },
    {
      id: 9,
      date: "2025-02-03T13:46:25.444723",
      email: "user9@mail.com",
    },
    {
      id: 10,
      date: "2025-02-03T13:46:25.444725",
      email: "user10@mail.com",
    },
  ];

  const [pageSize, setPageSize] = useState<number>(10);
  const EliminaRegistro = () => {
    alert("esta seguro que quiere eliminar el registro?");
  };
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
            <span className="flex flex-row gap-2">
          <BsNewspaper className="text-2xl" />
          <p className="text-lg">
            <b>Menú /</b> <span className="text-base">Lista</span>
          </p>
            </span>
            <span>
                <BlueButton text="Exportar a Excel" onClick={handleSave} icon={FaRegFileExcel} />
            </span>
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
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-grayM py-1 px-2 w-54"
            />
          </span>
        </div>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <p className="text-start pl-2">Fecha de suscripción</p>
                </th>
                <th>
                  <p className="text-start pl-2">Email</p>
                </th>
                <th>
                  <p className="text-start pl-2">!</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {suscripciones_data.map((src, index) => (
                <tr
                  key={index}
                  className={`h-12 opacity-60 hover:opacity-100 cursor-pointer
                            ${index % 2 === 0 ? "bg-grayM" : "bg-grayD"}
                            `}
                >
                  <td>
                    <p className="text-start pl-2">{formatDateTime(src.date)}</p>
                  </td>
                  <td>
                    <p className="text-start pl-2">{src.email}</p>
                  </td>
                  <td className="hover:text-blueB pr-2 text-start pl-2">
                    <BsTrash3 onClick={EliminaRegistro} />
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
