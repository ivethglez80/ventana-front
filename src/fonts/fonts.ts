import { Montserrat, Rubik, Poppins } from 'next/font/google';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600'],
});
const fontRubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'], 
});

export { fontMontserrat, fontRubik, fontPoppins };
