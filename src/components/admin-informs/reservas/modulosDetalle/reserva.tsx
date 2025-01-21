import { FaShoppingCart } from "react-icons/fa";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";


type reservaId = {
    id:number
}

export default function Modulo_ReservaDetalle({id}:reservaId) {

    const handleSave = () => {
        console.log("Guardando...");
        alert("guardando");
      };

  return (
    <>
      <div className="bg-grayD h-full w-full rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <FaShoppingCart className="text-2xl" />
          <p className="text-lg">
            <b>Reservas /</b> <span className="text-base">Editar</span>
          </p>
        </div>

        <div className="py-6">
            <span>
                <p>
                Fecha de registro
                </p>
                <input type="text" 
                placeholder="21-01-2025 14:06"
                className="inputDash"
                />
            </span>

            <span className="flex flex-row justify-between pt-4">
                <span>
                    <p>
                        Nombre
                    </p>
                    <input type="text" 
                    placeholder="Jordan"
                    className="inputDash"
                    />
                </span>
                <span>
                    <p>
                        Apellido
                    </p>
                    <input type="text" 
                    placeholder="Chapman"
                    className="inputDash"
                    />
                </span>
            </span>

            <span className="flex flex-row justify-between pt-4">
                <span>
                    <p>
                        Email
                    </p>
                    <input type="text" 
                    placeholder="jordan.chapmannn@gmail.com"
                    className="inputDash"
                    />
                </span>
                <span>
                    <p>
                    N° teléfono
                    </p>
                    <input type="text" 
                    placeholder="+61430088071"
                    className="inputDash"
                    />
                </span>
            </span>

            <span className="flex flex-row justify-between pt-4">
                <span>
                    <p>
                    Hotel
                    </p>
                    <input type="text" 
                    placeholder="Ayres Recoleta Uriburu"
                    className="inputDash"
                    />
                </span>
                <span>
                    <p>
                    Motivo de visita
                    </p>
                    <input type="text" 
                    placeholder="Compromiso"
                    className="inputDash"
                    />
                </span>
            </span>

            <span className="flex flex-col pt-4">
                <p>
                    Comentarios
                </p>
                <textarea name="" id=""
                placeholder=""
                className="inputDash w-full"
                rows={8}
                >

                </textarea>
            </span>


        </div>
            <div className="flex justify-end border-t border-grayL pt-4">
          <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />            
            </div>
      </div>
    </>
  );
}
