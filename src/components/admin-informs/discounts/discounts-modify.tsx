
import { GiTicket } from "react-icons/gi";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";


type Disc_modProps = {
    opcion:string;
    descuento:string;    
}

export default function Discount_modify ({opcion, descuento}:Disc_modProps) {
    const handleSave = () => {
        console.log("Guardando...");
        alert("guardando");
      };
    return (
        <>
        <div  className="bg-grayD h-full w-full md:w-[400px] rounded-xl text-grayL px-6 pb-6">
             <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
                      <GiTicket className="text-2xl" />
                      <p className="text-lg">
                        <b>Descuento /</b> <span className="text-base">Editar</span>
                      </p>
                    </div>

                    <div className="py-6">
                        <span>
                            <p className="text-lg">
                            Código 
                            </p>
                            <input 
                            type="text" 
                            placeholder={opcion}
                            className="inputDash"
                            />
                        </span>
                        <span>
                            <p className="text-lg pt-4 md:pt-6">
                            Descuento 
                            </p>
                            <input 
                            type="text" 
                            placeholder={descuento}
                            className="inputDash"
                            />
                        </span>
                    </div>

                     <div className="pt-4 border-t border-grayL flex justify-end">
                            <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />            
                            </div>
        </div>
        </>
    )
}