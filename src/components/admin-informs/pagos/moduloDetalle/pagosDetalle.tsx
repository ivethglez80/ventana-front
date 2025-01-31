import { FaDollarSign } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
// import { FaCheck } from "react-icons/fa";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";

type PagoDetalleProps = {
  id: number;
};

export default function Pago_Detalle({ id }: PagoDetalleProps) {
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };

  return (
    <div className="w-[1000px] flex flex-row gap-4">
      <div className="bg-grayD h-full w-full md:w-3/5 rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FaDollarSign className="text-2xl" />
          <p className="text-lg">
            <b>Pagos /</b> <span className="text-base">Editar</span>
          </p>
        </div>

        <div className="w-1/2">
          <p>Titulo</p>
          <input type="text" placeholder="titulo" className="inputDash" />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <span className="w-1/2">
            <p>Nombre</p>
            <input type="text" placeholder="nombre" className="inputDash" />
          </span>
          <span className="w-1/2">
            <p>Email</p>
            <input
              type="text"
              placeholder="nombre@email.com"
              className="inputDash"
            />
          </span>
        </div>

        <div className="w-1/2 flex flex-row justify-between gap-4">
          <span className="">
            <p>Fecha</p>
            <input type="text" placeholder="1-01-01" className="inputDash" />
          </span>
          <span className="">
            <p>Importe</p>
            <input type="text" placeholder="10" className="inputDash" />
          </span>
        </div>

        <div className="py-4">
          <p>Comentarios</p>
          <textarea
            name=""
            id=""
            placeholder=""
            className="inputDash w-full"
            rows={6}
          />
        </div>

        <div className="pt-4 border-t border-grayL flex justify-end">
        <BlueButton
          text="Guardar y enviar link"
          onClick={handleSave}
          icon={BiSave}
        />
      </div>
      </div>

      <div className="bg-grayD h-full w-full md:w-2/5 rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FaDollarSign className="text-2xl" />
          <p className="text-lg">
            <b>Datos del pago </b>
          </p>
        </div>
        <span>
          <p className="pt-4">id</p>
          <input type="text" placeholder="" className="inputDash" />
        </span>
        <span>
          <p className="pt-4">Importe</p>
          <input type="text" placeholder="$0.00" className="inputDash" />
        </span>
        <span>
          <p className="pt-4">Estado</p>
          <span className="flex flex-row gap-2 items-center">
            <CgDanger />
            <p>PENDIENTE</p>
          </span>
        </span>
      </div>
     
    </div>
  );
}
