import { desc } from "framer-motion/client";
import { GiTicket } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";


export default function Discounts_All() {

    const descuentos = [
        {
            id:1,
            codigo: "escuelas",
            descuento: "30%",
            estado: true,            
        },
        {
            id:2,
            codigo: "verano",
            descuento: "20%",
            estado: true,            
        },
        {
            id:3,
            codigo: "amigos",
            descuento: "50%",
            estado: false,            
        }
    ]
  
  return (
    <>
      <div className="bg-grayD h-[380px] w-full md:w-[700px] rounded-xl text-grayL px-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <GiTicket className="text-2xl" />
          <p className="text-lg">
            <b>Descuento /</b> <span className="text-base">Lista</span>
          </p>
        </div>

        <div className="pt-12 pb-16">
          <span className="flex flex-col md:flex-row justify-between">
            <span className="flex flex-row items-center">
              <p>Mostrar</p>
              <input type="text" placeholder="10" className="inputDash" />
              <p>registros</p>
            </span>
            <span className="flex flex-row items-center">
              <p>Buscar:</p>
              <input className="inputDash" />
            </span>
          </span>
        </div>

        <div>
          <table className="table-auto w-full">
            <thead className="text-white">
              <tr>
                <th className="text-start pl-2 md:pl-4">
                    id
                </th>
                <th className="text-start pl-2 md:pl-4">
                    Código
                </th>
                <th className="text-start pl-2 md:pl-4">
                    Descuento
                </th>
                <th className="text-start pl-2 md:pl-4">
                    Estado
                </th>
              </tr>
            </thead>

            {
                descuentos.map ((desc,index)=>(                                            
                    <tr key={index} className="border-2 border-b-grayD border-t-0 border-l-0">
                        <td className="bg-grayM pl-2 md:pl-4">
                            {desc.id}
                        </td>
                        <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                            {desc.codigo}
                        </td>
                        <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                            {desc.descuento}
                        </td>
                        <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                            {desc.estado ? "activo" : "inactivo"}
                        </td>
                        <td className="bg-grayM border-x-3 border-grayD pl-2 md:pl-4">
                        <BsTrash3 />
                        </td>
                    </tr>                                        
                )
                )
            }
          </table>
        </div>
      </div>
    </>
  );
}
