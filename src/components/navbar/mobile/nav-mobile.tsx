import { CustomImg } from "@/components/custom/custom-img";
import { Schedule } from "@/components/icons";

const NavMobile: React.FC = () => {
  return (
    <div
      className={`
    z-30
    grid
    grid-cols-3
    w-full
    grid-flow-col-dense
    place-content-center
    place-items-center
    gap-0
    sm:hidden
    `}
    >
      <div
        className={`
        grid
        place-items-center
        col-span-1
        col-start-1
        px-2
        min-h-24
        min-w-20
        bg-pallete-gold
        group
        `}
      >
        <Schedule
          color='pallete-title'
          className={`
            group-hover:fill-white
            h-full
            transition-colors
            delay-300
            `}
        />
      </div>
      <div
        className={`
        grid
        place-items-center
        place-content-center
        w-full
        col-span-1
        col-start-2
        h-full
        px-4
        max-w-[80px]
        `}
      >
        <CustomImg
          src={'/argentina.png'}
          alt={'flag'}
          width={300}
          height={300}
        />
      </div>
      <div
        className={`
        grid
        place-items-center
        place-content-center
        h-full
        w-full
        col-span-1
        col-start-3
        p-4
        max-w-[80px]
        `}
      >
        <CustomImg
          src={'/btn_whatsapp.png'}
          alt='icon whatsapp'
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
export default NavMobile;