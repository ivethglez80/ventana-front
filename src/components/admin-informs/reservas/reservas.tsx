import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const reservas = [    
     {
        id:2463,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z"
     },
     {
        id:2464,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z"
     },
     {
        id:2465,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z"
     },    
]


export default function Reservas () {
    const [openDetail, setOpenDetail] = useState<number | null>(null);
    const toggleDetail = (id: number) => {
        setOpenDetail((prevId) => (prevId === id ? null : id));
    }
    return (
        <>
       <div className="bg-grayD h-full w-full md:w-[1000px] rounded-xl text-grayL px-6 pb-6">
               <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
                 <FaShoppingCart className="text-2xl" />
                 <p className="text-lg">
                   <b>Reservas  /</b> <span className="text-base">Lista</span>
                 </p>
               </div>

               <div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="text-start pl-2">
                                id
                            </th>
                            <th className="text-start pl-2">
                                Compra
                            </th>
                            <th className="text-start pl-2">
                                Nombre
                            </th>
                            <th className="text-start pl-2">
                                Apellido
                            </th>
                            <th className="text-start pl-2">
                                Fecha del Show
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservas.map((src, index)=>(
                                <tr key={index}
                                className={`${((index%2)==0) ? "bg-blueD" : "bg-blueL"} hover:text-blueB cursor-pointer`}
                                >
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        <span className="flex flex-row gap-2 items-center">
                                        {
                                            openDetail === src.id
                                            ? (<FaCircleMinus className="text-red-500 text-lg"   onClick={()=>toggleDetail(src.id)}/>)
                                            : (<FaCirclePlus  className="text-green-500 text-lg" onClick={()=>toggleDetail(src.id)}/>)
                                        }
                                        {src.id}
                                        </span>
                                    </td>
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        {src.compra}
                                    </td>
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        {src.nombre}
                                    </td>
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        {src.apellido}
                                    </td>
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        {src.fechaShow}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
               </div>

       </div>
        </>
    )
}