import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";

export default function Pagos_new() {
    const [descuento, setDescuento] = useState<number>(5);
    const handleSave = () => {
        console.log("Guardando");
        alert("Guardando...");
      };
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <FaDollarSign className="text-2xl" />
          <p className="text-lg">
            <b>Pagos /</b> <span className="text-base">Nuevo</span>
          </p>
        </div>

        <div className="w-full pt-4">
          <p>Título</p>
          <input type="text" placeholder="" className="inputDash w-1/2" />
        </div>

        <div className="w-full pt-4 flex flex-row items-center gap-4">
          <span className="w-1/2">
            <p>Nombre</p>
            <input type="text" placeholder="" className="inputDash w-full" />
          </span>
          <span className="w-1/2">
            <p>Email</p>
            <input type="text" placeholder="" className="inputDash w-full" />
          </span>
        </div>

        <div className="w-full pt-4">
          <p>Fecha</p>
          <input type="text" placeholder="" className="inputDash w-1/2" />
        </div>

        <div className="flex flex-row items-center justify-between pt-4">
          <span className="w-1/5">
            <p>Importe</p>
            <input type="text" placeholder="" className="inputDash w-full" />
          </span>
          <span className="w-1/5">
            <p>
                Descuento
            </p>
          <select
                value={descuento}
                onChange={(e) => setDescuento(Number(e.target.value))}
                className="bg-grayM p-1"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
              </select>
          </span>
          <span className="w-1/4">
            <p className="text-sm">
            Importe del descuento
            </p>
            <input type="text" placeholder="Nan" className="inputDash w-full" />
          </span>
          <span className="w-1/5">
            <p>
            Total
            </p>
            <input type="text" placeholder="Nan" className="inputDash w-full" />
          </span>
        </div>

        <div className="py-4">
            <p>
                Comentarios
            </p>
            <textarea 
            name="" id=""
            placeholder=""
            className="inputDash w-full"
            rows={6}
            />
        </div>

         <div className="pt-4 border-t border-grayL flex justify-end">
                  <BlueButton text="Guardar y enviar link" onClick={handleSave} icon={BiSave} />
                </div>
      </div>
    </>
  );
}
