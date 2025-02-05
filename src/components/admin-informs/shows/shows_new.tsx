import { FaMusic } from "react-icons/fa";
import { useState, useRef } from "react";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";
import RichTextEditor from "@/components/admin/utils/RichTextEditor";
import { Descendant  } from "slate";
import { CustomElement } from "@/components/admin/utils/RichTextEditor";




export default function Shows_new() {
 
 
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };
   const [isChecked, setIsChecked] = useState(false);
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
  const [languaje, setLanguaje] = useState("Español");
  const toggleLanguage = (option: string) => {
    setLanguaje(option);
    console.log("option es:", option);
  };

  const [editorValue, setEditorValue] = useState<Descendant[]>([
    {
      type: 'paragraph', 
      children: [{ text: 'Initial text.' }], 
    } as CustomElement, 
  ]);

  const handleEditorChange = (value: Descendant[]) => {
    setEditorValue(value);
    console.log("Editor Value", value);
  };

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FaMusic className="text-2xl" />
          <p className="text-lg">
            <b>Show /</b> <span className="text-base">Nuevo</span>
          </p>
        </div>

        <div>
          <div className="pt-6 flex flex-row gap-4">
            <div
              className={`w-36 h-full hover:cursor-pointer pl-2 py-2 ${
                languaje === "Español" ? "bg-blueB text-white" : "bg-grayM"
              }`}
              onClick={() => toggleLanguage("Español")}
            >
              <p>Español</p>
            </div>
            <div
              className={`w-36 h-full hover:cursor-pointer pl-2 py-2 ${
                languaje === "Inglés" ? "bg-blueB text-white" : "bg-grayM"
              }`}
              onClick={() => toggleLanguage("Inglés")}
            >
              <p>Inglés</p>
            </div>
            <div
              className={`w-36 h-full hover:cursor-pointer pl-2 py-2 ${
                languaje === "Portugués" ? "bg-blueB text-white" : "bg-grayM"
              }`}
              onClick={() => toggleLanguage("Portugués")}
            >
              <p>Portugués</p>
            </div>
            <div
              className={`w-36 h-full hover:cursor-pointer pl-2 py-2 ${
                languaje === "Chino" ? "bg-blueB text-white" : "bg-grayM"
              }`}
              onClick={() => toggleLanguage("Chino")}
            >
              <p>Chino</p>
            </div>
          </div>
          <div className="px-2 pb-2 border border-blueB">
            <span>
              <p className="pt-6">Nombre</p>
              <input
                type="text"
                placeholder="nombre del show"
                className="inputDash"
              />
            </span>
            <span>
              <p className="pt-6">Descripción</p>
              <RichTextEditor initialValue={editorValue} onChange={handleEditorChange} />
              </span>
          </div>
        </div>

        <div>
          <div className="pt-4">
            <p>Fecha</p>
            <input type="text" placeholder="" className="inputDash" />
            <p className="text-xs">Vacío = Todos los días.</p>
          </div>
        </div>

        <div>
          <div className="pt-4 flex flex-row justify-between items-center">
            <span>
              <p className="text-xs">Horario degustación</p>
              <input type="text" placeholder="" className="inputDash w-[80%]" />
            </span>
            <span>
              <p>Horario clase</p>
              <input
                type="text"
                placeholder="7:00 PM"
                className="inputDash w-[80%]"
              />
            </span>
            <span>
              <p>Horario cena</p>
              <input
                type="text"
                placeholder="7:00 PM"
                className="inputDash w-[80%]"
              />
            </span>
            <span>
              <p>Horario show</p>
              <input
                type="text"
                placeholder="7:00 PM"
                className="inputDash w-[80%]"
              />
            </span>
            <span className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-5 h-5"
              />
              <p className="text-sm">Horario a convenir</p>
            </span>
          </div>
        </div>

        <div>
          <p>Importe</p>
          <input type="text" placeholder="140" className="inputDash" />
        </div>

        <div className="pt-4 flex flex-row items-center gap-2 pb-6">
          <p>Imagen</p>
          <button
            onClick={handleFileSelect}
            className="bg-blueB text-white py-1 px-2 rounded-md hover:bg-blue-600 transition"
          >
            Seleccionar archivo
          </button>
          <p>{fileName}</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="pt-4 border-t border-grayL flex justify-end">
          <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />
        </div>
      </div>
    </>
  );
}
