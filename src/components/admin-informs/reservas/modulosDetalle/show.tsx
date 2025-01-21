import { GiTicket } from "react-icons/gi";

export default function Modulo_ReservaShow() {
  return (
    <>
      <div className="bg-grayD h-full w-full rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <GiTicket className="text-2xl" />
          <p className="text-lg">
            <b>Show</b>
          </p>
        </div>

        <span className="flex flex-row justify-between pt-2">
          <span>
            <p>Fecha de reserva</p>
            <input type="text" placeholder="22-01-2025" className="inputDash" />
          </span>
          <span>
            <p>Show</p>
            <input
              type="text"
              placeholder="SOLO SHOW DE TANGO Y FOLCLORE"
              className="inputDash"
            />
          </span>
        </span>

        <span className="flex flex-row justify-between pt-2">
          <span>
            <p>Adultos</p>
            <input type="text" placeholder="2" className="inputDash" />
          </span>
          <span>
            <p>Menores</p>
            <input type="text" placeholder="0" className="inputDash" />
          </span>
        </span>

        <span className="flex flex-row justify-between pt-2">
          <span className="w-1/4">
            <p className="text-sm">Codigo descuento</p>
            <input type="text" placeholder="2" className="inputDash w-full" />
          </span>
          <span className="w-1/4">            
            <p className="py-2">%</p>
            <input type="text" placeholder="0" className="inputDash w-full" />
          </span>
          <span className="w-1/4">
            <p className="text-sm">Importe descuento USD</p>
            <input type="text" placeholder="0" className="inputDash w-full" />
          </span>
        </span>

        <span className="flex flex-row justify-between pt-2">
          <span>
            <p>$ x Pax USD</p>
            <input type="text" placeholder="70" className="inputDash" />
          </span>
          <span>
            <p>Total USD</p>
            <input type="text" placeholder="140" className="inputDash" />
          </span>
        </span>

      </div>
    </>
  );
}
