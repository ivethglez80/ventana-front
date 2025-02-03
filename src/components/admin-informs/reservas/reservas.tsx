import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";

const reservas = [    
     {
        id:2463,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z",
        pagado: true
     },
     {
        id:2464,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z",
        pagado: false
     },
     {
        id:2465,
        compra:"2024-12-23T18:00:00Z",
        nombre: "Trvelyn",
        apellido: "Jones",
        fechaShow: "2024-12-23T18:00:00Z",
        pagado: true
     },    
]


export default function Reservas ({ detalle }: { detalle: (id: number) => void }) {
    const [openDetail, setOpenDetail] = useState<number | null>(null);
    const toggleDetail = (id: number) => {
        setOpenDetail((prevId) => (prevId === id ? null : id));
    }
    const EliminaRegistro = () => {
        alert("esta seguro que quiere eliminar el registro?")
    }
    const [pageSize, setPageSize] = useState<number>(10);
 
    return (
        <>
       <div className="bg-grayD h-full w-full md:w-[1000px] rounded-xl text-grayL px-6 pb-6">
               <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
                 <FaShoppingCart className="text-2xl" />
                 <p className="text-lg">
                   <b>Reservas  /</b> <span className="text-base">Lista</span>
                 </p>
               </div>

               <div className="py-6">
      <span className="flex flex-row gap-2 items-center">
          <p>Mostrar</p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-grayM p-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p>registros</p>
        </span>
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
                                className={`${((index%2)==0) ? "bg-blueD" : "bg-blueL"} hover:text-blueB cursor-pointer relative`}
                                >
                                    <td className="text-start pl-2 py-2 border-x-3 border-grayD" >
                                        <span className="flex flex-row gap-2 items-center">
                                        {
                                            openDetail === src.id
                                            ? (<FaCircleMinus className="text-red-500 text-lg"   onClick={()=>toggleDetail(src.id)}/>)
                                            : (<FaCirclePlus  className="text-green-500 text-lg" onClick={()=>toggleDetail(src.id)}/>)
                                        }
                                    <span onClick={() => detalle(src.id)}>
                                        {src.id}                                       
                                        </span>
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
                                    {
                                            openDetail === src.id  && (
                                                <td>
                                                <div className="bg-grayD absolute left-8 mt-4 w-[420px] z-20 hover:text-grayL p-4 border border-grayL border-t-transparent">                                                   
                                                    <span className="flex flex-row border-b-2 border-grayL w-full h-full">
                                                     <p className="w-1/4">
                                                        Show
                                                        </p>
                                                        <p className="text-sm text-end w-full">
                                                        CENA + SHOW DE TANGO Y FOLCLORE
                                                            </p>   
                                                    </span>

                                                    <span className="flex flex-row border-b-2 border-grayL w-full">
                                                        <p className="w-1/4">
                                                            Descuento
                                                        </p>

                                                        <p className="text-sm text-end w-full">

                                                        </p>
                                                    </span>
                                                    <span className="flex flex-row border-b-2 border-grayL w-full">
                                                        <p className="w-1/4">
                                                            Total
                                                        </p>
                                                        <p className="text-sm text-end w-full">
                                                            USD 520.00
                                                        </p>
                                                    </span>
                                                    <span  className="flex flex-row border-b-2 border-grayL w-full">
                                                        <p className="w-1/4">
                                                            Estado
                                                        </p>
                                                        <span  className="flex justify-end w-full">
                                                            <span className="flex flex-row gap-2">
                                                            {
                                                                src.pagado ? <FaCheck /> : <FaX />
                                                            }
                                                            <p className="text-sm text-end w-full">
                                                            {
                                                                src.pagado? "APROBADO" : "RECHAZADO"
                                                            }
                                                            </p>
                                                            </span>
                                                        </span>
                                                    </span>
                                                        <span className="flex justify-end pr-6 pt-2 hover:text-blueB">
                                                        <BsTrash3 onClick={EliminaRegistro}/>
                                                        </span>
                                                </div>
                                                </td>
                                            )
                                        }
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