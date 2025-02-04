import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import Switcher4 from "@/components/admin/buttons/toggleSwitch";
import { BsTrash3 } from "react-icons/bs";

export default function Users_all({ detalle }: { detalle: (id: number) => void }) {
  const initialUsers = [
    { id: 1, nombre: "Luciano", apellido: "Apellido", email: "email1@mail.com", rol: "admin", estado: false },
    { id: 2, nombre: "Luciano", apellido: "Apellido", email: "email2@mail.com", rol: "user", estado: false },
    { id: 3, nombre: "Luciano", apellido: "Apellido", email: "email3@mail.com", rol: "user", estado: false },
    { id: 4, nombre: "Luciano", apellido: "Apellido", email: "email4@mail.com", rol: "user", estado: false },
    { id: 5, nombre: "Luciano", apellido: "Apellido", email: "email5@mail.com", rol: "user", estado: false },
    { id: 6, nombre: "Luciano", apellido: "Apellido", email: "email6@mail.com", rol: "user", estado: true },
    { id: 7, nombre: "Luciano", apellido: "Apellido", email: "email7@mail.com", rol: "user", estado: false },
    { id: 8, nombre: "Luciano", apellido: "Apellido", email: "email8@mail.com", rol: "user", estado: true },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Cálculo de índices para paginación
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Función para cambiar el estado del usuario (toggle switch)
  const toggleEstado = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, estado: !user.estado } : user
      )
    );
  };

  const EliminaRegistro = () => {
    alert("¿Está seguro que quiere eliminar el registro?");
  };

  return (
    <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6">
      <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
        <FaUsers className="text-2xl" />
        <p className="text-lg">
          <b> Usuarios /</b> <span className="text-base">Lista</span>
        </p>
      </div>

      {/* Controles de paginación */}
      <div className="pt-6 pb-6 flex flex-col md:flex-row justify-between">
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
      </div>

      {/* Tabla */}
      <div className="max-h-[450px] overflow-y-auto w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start pl-2">Id</th>
              <th className="text-start">Nombre</th>
              <th className="text-start">Apellido</th>
              <th className="text-start">Email</th>
              <th className="text-start">Rol</th>
              <th className="text-start">Estado</th>
              <th className="text-start">!</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((src, index) => (
              <tr
                key={src.id}
                className={`${
                  index % 2 === 0 ? "bg-blueD" : "bg-blueL"
                } hover:text-blueB cursor-pointer h-12 text-sm`}
                onClick={() => detalle(src.id)}
              >
                <td className="pl-2">{src.id}</td>
                <td>{src.nombre}</td>
                <td>{src.apellido}</td>
                <td>{src.email}</td>
                <td>{src.rol}</td>
                <td>
                  <Switcher4
                    isChecked={src.estado}
                    onToggle={() => toggleEstado(src.id)}
                  />
                </td>
                <td className="hover:text-blueB pr-2">
                  <BsTrash3 onClick={EliminaRegistro} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(users.length / pageSize) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === index + 1 ? "bg-blueB text-white" : "bg-grayM"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
