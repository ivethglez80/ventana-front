import { Footer } from "@/components/footer/footer";

export default function FooterContent() {
  const poweredBy: string =
    'Todos los derechos reservados por Ventana SRL - by Familia Tango Show Argentina';

  return (
    <footer className=' bg-pallete-gold grid grid-flow-row auto-rows-auto'>
      

      <Footer powerBy={poweredBy} variant='minimal'/>
    </footer>
  );
}
