import { FaLanguage } from "react-icons/fa6";
import { BiSave } from "react-icons/bi";
import BlueButton from "@/components/admin/buttons/blueButton";

export default function Traducciones_new () {
    const handleSave = () => {
        console.log("Guardando");
        alert("Guardando...");
      };
    return (
        <>
        <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6">
                <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
                  <span className="flex flex-row gap-2">
                    <FaLanguage className="text-2xl" />
                    <p className="text-lg">
                      <b>Traducción /</b> <span className="text-base">Nueva</span>
                    </p>
                  </span>
                </div>

                <div className="border-b border-grayL flex flex-row gap-4 justify-between py-6">

                    <div className="w-1/4">
                       <p>
                       Español
                        </p> 
                        <textarea 
                        name="" 
                        id=""
                        className="inputDash w-full"
                        rows={12}
                        />
                    </div>

                    <div className="w-1/4">
                       <p>
                       Inglés
                        </p> 
                        <textarea 
                        name="" 
                        id=""
                        className="inputDash w-full"
                        rows={12}
                        />
                    </div>

                    <div className="w-1/4">
                       <p>
                       Portugues
                        </p> 
                        <textarea 
                        name="" 
                        id=""
                        className="inputDash w-full"
                        rows={12}
                        />
                    </div>

                    <div className="w-1/4">
                       <p>
                       Chino
                        </p> 
                        <textarea 
                        name="" 
                        id=""
                        className="inputDash w-full"
                        rows={12}
                        />
                    </div>

                </div>

                <div className="flex justify-end pt-6">
                <BlueButton text="Guardar" onClick={handleSave} icon={BiSave}/>        
                </div>

        </div>
        </>
    )
}