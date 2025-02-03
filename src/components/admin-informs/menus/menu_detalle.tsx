import { FaBook } from "react-icons/fa";
import { useState, useRef } from "react";

type MenuDetalleProps = {
    id: number;
  };

export default function Menu_detalle({ id }: MenuDetalleProps) {
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };

  const [isChecked, setIsChecked] = useState(false);
  const [fileName, setFileName] = useState<string>("Ningún archivo seleccionado");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const [language, setLanguage] = useState("Español");
  const toggleLanguage = (option: string) => {
    setLanguage(option);
    console.log("Opción seleccionada:", option);
  };

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FaBook className="text-2xl" />
          <p className="text-lg">
            <b>Menú /</b> <span className="text-base">Editar id:{id}</span>
          </p>
        </div>
        <div>
          <div className="pt-6 flex flex-row gap-4">
            {["Español", "Inglés", "Portugués", "Chino"].map((lang) => (
              <div
                key={lang}
                className={`w-36 h-full hover:cursor-pointer pl-2 py-2 ${
                  language === lang ? "bg-blueB text-white" : "bg-grayM"
                }`}
                onClick={() => toggleLanguage(lang)}
              >
                <p>{lang}</p>
              </div>
            ))}
          </div>
          <div className="px-2 pb-2 border border-blueB">
            <span>
              <p className="pt-6">Nombre</p>
              <input type="text" placeholder="" className="inputDash" />
            </span>

            <div className="pt-4 flex flex-col pb-6">
              <p>PDF en {language}</p>
              <button
                onClick={handleFileSelect}
                className="bg-blueB text-white py-1 px-2 rounded-md hover:bg-blue-600 transition w-1/3"
              >
                Seleccionar archivo
              </button>

              <p className="text-sm">{fileName}</p>

              {/* ✅ Permitir solo archivos PDF */}
              <input
                type="file"
                accept="application/pdf" // SOLO PERMITE PDF
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
