import { AiOutlinePicture } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Switcher4 from "@/components/admin/buttons/toggleSwitch";
import { BsTrash3 } from "react-icons/bs";

export default function GaleriaMenus_all() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [images_menu, setImages_menu] = useState([
    { id: 1, img_url: "/dashbrd/img_sample.png", image_name: "imagen1", estado: true },
    { id: 2, img_url: "/dashbrd/img_sample.png", image_name: "imagen2", estado: false },
    { id: 3, img_url: "/dashbrd/img_sample.png", image_name: "imagen3", estado: true },
    { id: 4, img_url: "/dashbrd/img_sample.png", image_name: "imagen4", estado: false },
    { id: 5, img_url: "/dashbrd/img_sample.png", image_name: "imagen5", estado: true },
    { id: 6, img_url: "/dashbrd/img_sample.png", image_name: "imagen6", estado: false },
    { id: 7, img_url: "/dashbrd/img_sample.png", image_name: "imagen7", estado: true },
    { id: 8, img_url: "/dashbrd/img_sample.png", image_name: "imagen8", estado: false },
    { id: 9, img_url: "/dashbrd/img_sample.png", image_name: "imagen9", estado: true },
    { id: 10, img_url: "/dashbrd/img_sample.png", image_name: "imagen10", estado: false },
    { id: 11, img_url: "/dashbrd/img_sample.png", image_name: "imagen11", estado: true },
    { id: 12, img_url: "/dashbrd/img_sample.png", image_name: "imagen12", estado: false },
    { id: 21, img_url: "/dashbrd/img_sample.png", image_name: "imagen1", estado: true },
    { id: 22, img_url: "/dashbrd/img_sample.png", image_name: "imagen2", estado: false },
    { id: 23, img_url: "/dashbrd/img_sample.png", image_name: "imagen3", estado: true },
    { id: 24, img_url: "/dashbrd/img_sample.png", image_name: "imagen4", estado: false },
    { id: 25, img_url: "/dashbrd/img_sample.png", image_name: "imagen5", estado: true },
    { id: 26, img_url: "/dashbrd/img_sample.png", image_name: "imagen6", estado: false },
    { id: 27, img_url: "/dashbrd/img_sample.png", image_name: "imagen7", estado: true },
    { id: 28, img_url: "/dashbrd/img_sample.png", image_name: "imagen8", estado: false },
    { id: 29, img_url: "/dashbrd/img_sample.png", image_name: "imagen9", estado: true },
    { id: 210, img_url: "/dashbrd/img_sample.png", image_name: "imagen10", estado: false },
    { id: 211, img_url: "/dashbrd/img_sample.png", image_name: "imagen11", estado: true },
    { id: 212, img_url: "/dashbrd/img_sample.png", image_name: "imagen12", estado: false },
  ]);

  const totalPages = Math.ceil(images_menu.length / pageSize);
  const paginatedData = images_menu.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleEstado = (id: number) => {
    setImages_menu((prev) =>
      prev.map((desc) => (desc.id === id ? { ...desc, estado: !desc.estado } : desc))
    );
  };

  const EliminaRegistro = () => {
    alert("¿Está seguro que quiere eliminar el registro?");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const openLightbox = (img: string) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[700px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row justify-between border-b border-grayL pt-4 pb-2 items-center">
          <span className="flex flex-row gap-2">
            <AiOutlinePicture className="text-2xl" />
            <p className="text-lg">
              <b>Galería menú /</b> <span className="text-base">Lista</span>
            </p>
          </span>
        </div>

        <div className="py-8 flex justify-between">
          <span className="flex flex-row gap-2 items-center">
            <p>Mostrar</p>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1); 
              }}
              className="bg-grayM p-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <p>registros</p>
          </span>
        </div>

        {/* Contenedor scrollable */}
        <div className="max-h-[450px] overflow-y-auto w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <p className="text-start pl-2">Imágen</p>
                </th>
                <th>
                  <p className="text-start pl-2">Estado</p>
                </th>
                <th>
                  <p className="text-start pl-2">!</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((src, index) => (
                <tr
                  key={src.id}
                  className={`${
                    index % 2 === 0 ? "bg-blueD" : "bg-blueL"
                  } hover:text-blueB cursor-pointer`}
                >
                  <td>
                    <Image
                      src={src.img_url}
                      alt={src.image_name}
                      height={60}
                      width={100}
                      className="h-16 w-24 object-cover rounded-lg my-2 ml-2"
                      onClick={() => openLightbox(src.img_url)}
                    />                    
                  </td>
                  <td>
                    <Switcher4 isChecked={src.estado} onToggle={() => toggleEstado(src.id)} />
                  </td>
                  <td className="hover:text-blueB pr-2">
                    <BsTrash3 onClick={EliminaRegistro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-white hover:bg-blueB text-black px-3 py-1 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <Image
              src={currentImage}
              alt="Imagen ampliada"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
