import Modulo_ReservaDetalle from "./modulosDetalle/reserva";
import Modulo_ReservaPago from "./modulosDetalle/pago";
import Modulo_ReservaShow from "./modulosDetalle/show";

type ReservaDetalleProps = {
  id: number;
  
};

export default function ReservaDetalle({ id }: ReservaDetalleProps) {
    return (
      <div className="w-[1000px] flex flex-row gap-4">
        <div className="w-1/2 h-[700px] bg-grayD rounded-lg">
          <Modulo_ReservaDetalle id={id}/>
        </div>              
        <div className="w-1/2 h-[700px] flex flex-col gap-4">
        <div className="w-full h-1/2 bg-grayD rounded-lg">
        <Modulo_ReservaShow />
        </div>
        <div className="w-full h-1/2 bg-grayD rounded-lg">
        <Modulo_ReservaPago />
        </div>
        </div>

      </div>
    );
  }