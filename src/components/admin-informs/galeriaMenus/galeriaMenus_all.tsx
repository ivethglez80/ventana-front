import { AiOutlinePicture } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

export default function GaleriaMenus_all () {

    const [pageSize, setPageSize] = useState<number>(10);
    const images_menu = [
        {
            id: 1,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen1"
        },
        {
            id: 2,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen2"
        },
        {
            id: 3,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen3"
        },
        {
            id: 4,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen4"
        },
        {
            id: 5,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen5"
        },
        {
            id: 6,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen6"
        },
        {
            id: 7,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen7"
        },
        {
            id: 8,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen8"
        },
        {
            id: 9,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen9"
        },
        {
            id: 10,
            img_url: "/dashbrd/img_sample.png",
            image_name: "imagen10"
        }
    ];
    

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

                <div className="py-8 flex justify-between">
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
          <span className="flex flex-row gap-2 items-center">
            <p>Buscar:</p>
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-grayM py-1 px-2 w-54"
            />
          </span>
        </div>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <p>
                                
Imágen
                            </p>
                        </th>
                        <th>
                            <p>
                            Estado
                            </p>                                
                        </th>
                        <th>
                            <p>
                                !
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        images_menu.map((src,index)=>(
                            <tr key={index}>
                                <td>
                                    <Image
                                    src={src.img_url}
                                    alt={src.image_name}
                                    height={100}
                                    width={100}
                                    className=""
                                    />
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