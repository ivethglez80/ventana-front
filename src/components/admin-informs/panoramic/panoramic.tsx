import { FcStatistics } from "react-icons/fc";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Panoramic() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <>
      <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b border-grayL pt-4 pb-2">
          <FcStatistics className="text-2xl" />
          <p className="text-lg">
            <b> Estadísticas </b>
          </p>
        </div>
        <div className="flex flex-row gap-6 pt-6">
          <span>
            <p>Desde</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="inputDash"
              dateFormat="dd/MM/yyyy"
            />
          </span>
          <span>
            <p>Hasta</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="inputDash"
              dateFormat="dd/MM/yyyy"
            />
          </span>
          <span>
            <button
              className="bg-blueB text-white hover:brightness-75 py-3 px-8 rounded-lg"              
            >
              <span className="flex flex-row gap-2 items-center">                
                <p className="text-lg">Consultar</p>
              </span>
            </button>
          </span>
        </div>
      </div>

      <div className="bg-grayD h-full w-full md:w-[1100px] rounded-xl text-grayL px-6 pb-6 mt-2">
        <p className="py-4 pl-2">
            Se realizaron  ### reservas, ### pasajeros - (### adultos, ### menores), por un total de &nbsp;
            <span className="text-greenB text-xl font-semibold">
                $000,000.00
            </span>
        </p>
      </div>
    </>
  );
}
