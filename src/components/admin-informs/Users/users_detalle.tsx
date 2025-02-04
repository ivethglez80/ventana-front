import { FaUsers } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import BlueButton from "@/components/admin/buttons/blueButton";

type UsersDetalleProps = {
    id: number;
  };

export default function Users_detalle({id}:UsersDetalleProps) {
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };

  return (
    <div className="bg-grayD h-full w-full md:w-[600px] rounded-xl text-grayL px-6 pb-6">
      <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
        <FaUsers className="text-2xl" />
        <p className="text-lg">
          <b> Usuarios /</b> <span className="text-base">Modifica id: {id}</span>
        </p>
      </div>

      <div className="pt-4">
        <p>Nombre</p>
        <input type="text" placeholder="" className="inputDash" />
      </div>

      <div className="pt-4 flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <p>Email</p>
          <input type="email" placeholder="" className="inputDash" />
        </div>
        <div className="w-full">
          <p>Contraseña</p>
          <input type="password" placeholder="" className="inputDash" />
        </div>
      </div>

      <div className="pt-4">
        <p>Estado</p>
        <select className="inputDash">
          <option value="activado">Activado</option>
          <option value="desactivado">Desactivado</option>
        </select>
      </div>

      <div className="flex justify-end pt-6">
        <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />
      </div>
    </div>
  );
}
