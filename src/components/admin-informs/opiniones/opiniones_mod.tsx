import { HiChatBubbleLeft } from "react-icons/hi2";
import BlueButton from "@/components/admin/buttons/blueButton";
import { BiSave } from "react-icons/bi";
import { useState } from "react";


type OpinionesModProps = {
    opinion: {
      id: number;
      langId: number;
      img: string;
      name: string;
      title: string;
      text: string;
      valor: number;
      date: string;
      status: boolean;
    };
  };

export default function Opiniones_mod ({ opinion }: OpinionesModProps) { 

  const handleSave = () => {
    console.log("Guardando cambios");
    alert("Guardando...");
  };

  const Langs = [
    {
        id:1,
        name:"Español",
        code:"Es"
    },
    {
        id:2,
        name:"Portugues",
        code:"Pr"
    },
    {
        id:3,
        name:"Ingles",
        code:"En"
    },
  ];

  const [selectedLang, setSelectedLang] = useState(Langs[0].id);
  const [text, setText] = useState(opinion.text);

  return (
    <>
      <div className="bg-grayD h-full pb-6 w-full md:w-[700px] rounded-xl text-grayL px-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <HiChatBubbleLeft className="text-2xl" />
          <p className="text-lg">
            <b>Opiniones  /</b> <span className="text-base">Editar</span>
          </p>
        </div>

        <div className="py-6">
        <span>
            <p className="text-base">
                Texto
            </p>
            <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="" 
            id=""
            rows={6}
            className="bg-grayM focus:bg-grayL text-white focus:outline-none w-full p-4"
            >
            </textarea>
        </span>
        <span>
            <p className="text-base">
            Idioma
            </p>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(Number(e.target.value))}
              className="bg-grayM focus:bg-grayL text-white focus:outline-none w-36 p-2 rounded-md cursor-pointer"
            >
              {Langs.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
        </span>
        </div>

        <div className="pt-4 border-t border-grayL flex justify-end">
          <BlueButton text="Guardar" onClick={handleSave} icon={BiSave} />
        </div>
      </div>
    </>
  );
}
