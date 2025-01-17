import { HiChatBubbleLeft } from "react-icons/hi2";
import BlueButton from "@/components/admin/buttons/blueButton";
import { MdAddComment } from "react-icons/md";
import { GiBlackFlag } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";

type OpinionesAllProps = {
    onEdit: (opinion: any) => void; 
  };

export default function Opiniones_all({ onEdit }: OpinionesAllProps) {
  const opiniones = [
    {
        id:0,
        langId:1,
        img:"",
        name:"Mike",
        title:"so glad",
        text:"A tour guide recommended this show to me and I'm so glad I did. I'm not the type...",
        valor:5,
        date:"",
        status: true
    },
    {
        id:0,
        langId:1,
        img:"",
        name:"user1",
        title:"maravilloso",
        text:"100% recomendado. Fui con mi familia y todo fue espectacular. Excelente atención...",
        valor:5,
        date:"",
        status: true
    },
    {
        id:0,
        langId:1,
        img:"",
        name:"Mike2",
        title:"so glad",
        text:"A tour guide recommended this show to me and I'm so glad I did. I'm not the type...",
        valor:5,
        date:"",
        status: true
    },
    {
        id:0,
        langId:1,
        img:"",
        name:"user4",
        title:"maravilloso",
        text:"100% recomendado. Fui con mi familia y todo fue espectacular. Excelente atención...",
        valor:5,
        date:"",
        status: true
    },
  ]  
  const OpinionsQty = [
    10,20,50,100
  ]  
  const handleSave = () => {
    alert("alla vamos");
  };
  const DeleteOpinion = () =>{
    alert("eliminando felizmente")
  }
  return (
    <>
      <div className="bg-grayD h-full pb-6 w-[1000px] rounded-xl text-grayL px-6">
        <div className="flex flex-row justify-between border-b-1 border-grayL pt-4 pb-2">
          <span className="flex flex-row items-center gap-2">
            <HiChatBubbleLeft className="text-2xl" />
            <p className="text-lg">
              <b>Opinión /</b> <span className="text-base">Nuevo</span>
            </p>
          </span>
          <span>
          <BlueButton text="Guardar" onClick={handleSave} icon={MdAddComment} />
          </span>
        </div>

        <div className="py-4 flex justify-between">
            <span className="flex flex-row gap-2 items-center">
                <p className="text-sm">
                Mostrar 
                </p>
                <select
              
              onChange={handleSave}
              className="bg-grayM focus:bg-grayM text-white focus:outline-none w-36 p-2 rounded-md cursor-pointer"
            >
              {OpinionsQty.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            </span>

            <span className="flex flex-row items-center gap-2">
                <p className="text-sm">
                Buscar:
                </p>
                <input 
                type="text" 
                className="inputDash"
                />
            </span>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
            <table className="table-auto w-full pt-6">
                <thead>
                    <tr>
                        <th className="text-start pl-2 md:pl-4">
                            Texto
                        </th>
                        <th className="text-start pl-2 md:pl-4">
                            Idioma
                        </th>
                        <th className="text-start pl-2 md:pl-4">
                            --
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        opiniones.map((data, index)=>(                                                        
                            <tr 
                            key={index}
                            className={`${((index%2)==0) ? "bg-blueD" : "bg-blueL"}
                            `}>
                            <td 
                            className="hover:text-blueB cursor-pointer py-2 pl-2"
                            onClick={() => onEdit(data)} 
                            >
                            {data.text}
                            </td>
                            <td className="py-2 pl-2">
                            <GiBlackFlag />
                            </td>
                            <td className="py-2 pl-2 hover:text-blueB" onClick={DeleteOpinion}>
                            <BsTrash3 />
                            </td>
                            </tr>                                                        
                        ))
                    }            
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}
