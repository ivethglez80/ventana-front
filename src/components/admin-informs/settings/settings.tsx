import { IoSettingsSharp } from "react-icons/io5";
import { useState, useRef } from "react";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";

export default function Settings() {
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
  const handleSave = () => {
    console.log("Guardando");
    alert("Guardando...");
  };
  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[800px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
          <span className="flex flex-row gap-2">
            <IoSettingsSharp className="text-2xl" />
            <p className="text-lg">
              <b>Configuración /</b> <span className="text-base">Editar</span>
            </p>
          </span>
        </div>
        <div className="pt-4">
          <p className="text-sm">
            Destinatarios formularios (separados por coma, ej :
            info@laventanaweb.com, consultas@laventanaweb.com)
          </p>
          <input
            type="text"
            placeholder="email@mail.com"
            className="inputDash w-1/2"
          />
        </div>
        <div className="pt-4">
          <p className="text-sm">Dolar</p>
          <input type="text" placeholder="1000" className="inputDash w-1/4" />
        </div>
        <div className="flex flex-row pt-8 gap-4">
          <span>
            <p className="text-sm">Teléfonos</p>
            <input
              type="text"
              placeholder="(+5411) 3220-3300"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Whatsapp</p>
            <input
              type="text"
              placeholder="(+549) 11-6875-9015"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Dirección (Google maps)</p>
            <input
              type="text"
              placeholder="Balcarce 431"
              className="inputDash"
            />
          </span>
        </div>

        {/*redes*/}
        <div className="flex flex-row flex-wrap pt-8 gap-4">
          <span>
            <p className="text-sm">Instagram</p>
            <input
              type="text"
              placeholder="https://www.instagram.com/laventanatango.ba"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Facebook</p>
            <input
              type="text"
              placeholder="https://www.facebook.com/laventana.barriodetango/"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Tiktok</p>
            <input
              type="text"
              placeholder="https://www.tiktok.com/@laventana.ba"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Youtube</p>
            <input
              type="text"
              placeholder="https://www.youtube.com/@familiatangoshow"
              className="inputDash"
            />
          </span>
          <span>
            <p className="text-sm">Vimeo</p>
            <input
              type="text"
              placeholder="https://vimeo.com/386224073"
              className="inputDash"
            />
          </span>
        </div>
        {/* seleccionar archivo */}
        <div className="pt-8 flex flex-row items-center gap-2 pb-6 border-b border-grayL">
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

        <div>
          <p>Sobre Nosotros</p>
          <textarea name="" id="" className="inputDash w-full" rows={6} />
        </div>

        <div>
          <p>Responsabilidad social empresarial</p>
          <textarea name="" id="" className="inputDash w-full" rows={6} />
        </div>

        <div>
          <p>Políticas de cookies</p>
          <textarea name="" id="" className="inputDash w-full" rows={6} />
        </div>

        <div>
          <p>Términos y condiciones</p>
          <textarea name="" id="" className="inputDash w-full" rows={6} />
        </div>

        <div className="pt-4 border-t border-grayL flex justify-end">
          <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />
        </div>
      </div>
    </>
  );
}
