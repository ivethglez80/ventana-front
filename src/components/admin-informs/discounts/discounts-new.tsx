import { GiTicket } from "react-icons/gi";
import { BiSave } from "react-icons/bi";
import BlueButton from "@/components/admin/buttons/blueButton";

export default function Discounts_New () {
    const handleSave = () => {
        console.log("Guardando...");
        alert("guardando");
      };
    return (
        <>
       <div className="bg-grayD h-[380px] w-full md:w-[700px] rounded-xl text-grayL px-6">        
        

        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
        <GiTicket className="text-2xl"/>
        <p className="text-lg">
            <b>Descuento /</b>  <span className="text-base">Nuevo</span>
        </p>
        </div>

        <div className="pt-12 pb-16">
            <span className="">
            <p>
                Código
            </p>
            <input type="text" 
            className="inputDash"
            />
            </span>

            <span className="">
                <p className="pt-4">
                    Descuento
                </p>
                <input type="text" 
                placeholder="5%"
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