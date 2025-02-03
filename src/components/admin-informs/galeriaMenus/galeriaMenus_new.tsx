import { AiOutlinePicture } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import BlueButton from "@/components/admin/buttons/blueButton";
import { useState, useRef } from "react";

export default function GaleriaMenus_new() {
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };
  const [fileName, setFileName] = useState<string>(
    "Ningún archivo seleccionado"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
          <span className="flex flex-row gap-2">
            <AiOutlinePicture className="text-2xl" />
            <p className="text-lg">
              <b>Galeria menú /</b> <span className="text-base">Nueva</span>
            </p>
          </span>
        </div>

        <div className="pt-4 flex flex-col pb-6 border-b border-grayL">
          <p> Imagen </p>
          <button
            onClick={handleFileSelect}
            className="bg-blueB text-white py-1 px-2 rounded-md hover:bg-blue-600 transition w-1/3"
          >
            Seleccionar archivo
          </button>

          <p className="text-sm">{fileName}</p>

          <input
            type="file"
            accept="aimage/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="pt-6 flex justify-end">
          <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />        
        </div>
      </div>
    </>
  );
}
