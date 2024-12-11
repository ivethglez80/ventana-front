import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { fontMontserrat } from '@/fonts/fonts';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { ProviderUI } from '@/providers/nextui/provider-ui';
import HeaderContent from '@/components/modules/header/header-content';
import ContainerContent from '@/components/modules/container-content/container-content';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={siteConfig.description} />
        {/* <link rel='icon' href='/logo.png' /> */}
      </head>
      <body
        className={clsx(
          'min-h-screen bg-background font-serif antialiased',
          fontMontserrat.className
        )}
      >
        <ProviderUI themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          {/* header */}
          <HeaderContent />
          {/* main and footer */}
          <ContainerContent  >
            {children}
          </ContainerContent>
        </ProviderUI>
      </body>
    </html>
  );
}
