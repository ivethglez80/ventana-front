import { FaDollarSign } from "react-icons/fa";

export default function Modulo_ReservaPago() {
  return (
    <>
      <div className="bg-grayD h-full w-full rounded-xl text-grayL px-6 pb-6">
        <div className="flex flex-row gap-2 border-b-1 border-grayL pt-4 pb-2">
          <FaDollarSign className="text-2xl" />
          <p className="text-lg">
            <b>Datos del pago</b>
          </p>
        </div>

        <span className="flex flex-row justify-between pt-6">
          <span>
            <p>id</p>
            <input type="text" placeholder="80757951CJ101190M" className="inputDash" />
          </span>
          <span>
            <p>Estado</p>
            <input type="text" placeholder="COMPLETED" className="inputDash" />
          </span>
        </span>

        <span className="flex flex-row justify-between pt-2">
          <span>
            <p>Nombre</p>
            <input type="text" placeholder="Jordan Chapman" className="inputDash" />
          </span>
          <span>
            <p>Email</p>
            <input type="text" placeholder="Jordan.chapmannn@gmail.com" className="inputDash" />
          </span>
        </span>

        <span className="flex flex-row justify-between pt-2">
          <span>
            <p>Importe</p>
            <input type="text" placeholder="usd 140.00" className="inputDash" />
          </span>
          <span>
            <p>País</p>
            <input type="text" placeholder="AU" className="inputDash" />
          </span>
        </span>


      </div>
    </>
  );
}
