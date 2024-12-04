import { Montserrat, Rubik } from 'next/font/google';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600'],
});
const fontRubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export { fontMontserrat, fontRubik };
