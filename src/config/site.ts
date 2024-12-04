export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'La Ventana',
  title: {
    en: 'La Ventana',
    es: 'La Ventana',
    default: 'La Ventana'
  },
  description: 'La ventana web',
  navItems: [
    {
      label: 'Salón',
      href: '#salon',
    },
    {
      label: 'menú',
      href: '#menu',
    },
    {
      label: 'contacto',
      href: '#contacto',
    },
    {
      label: 'show',
      href: '#shows',
    },
    {
      label: 'canciones',
      href: '/',
    },
    {
      label: 'eventos',
      href: 'https://eventosbsas.com/',
    },
    {
      label: 'reservas',
      href: '#reservas',
    },
    {
      label: 'usd',
      href: '/',
    },
  ],
  navMenuItems: [
    {
      label: 'Salón',
      href: '#salon',
    },
    {
      label: 'menú',
      href: '#menu',
    },
    {
      label: 'show',
      href: '#shows',
    },
    {
      label: 'canciones',
      href: '/',
    },
    {
      label: 'contacto',
      href: '#contacto',
    },
    {
      label: 'eventos',
      href: 'https://eventosbsas.com/',
    },
    {
      label: 'reservas',
      href: '#reservas',
    },
    {
      label: 'usd',
      href: '/',
    },
  ],
  links: {
    github: '/',
    twitter: '/',
    docs: '/',
    discord: '/',
    sponsor: '/',
  },
};
