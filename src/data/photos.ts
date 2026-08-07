import type { ImageMetadata } from 'astro';
import retrato from '../assets/images/retrato.jpg';
import infantil from '../assets/images/infantil.jpg';
import arquitectura from '../assets/images/arquitectura.jpg';
import editorial1 from '../assets/images/editorial-1.jpg';
import editorial2 from '../assets/images/editorial-2.jpg';
import editorial3 from '../assets/images/editorial-3.jpg';
import hero from '../assets/images/hero.jpg';
import banner from '../assets/images/banner.jpg';

export type Category = 'Todos' | 'Retrato' | 'Editorial';

export interface Photo {
  id: string;
  src: ImageMetadata;
  alt: string;
  category: Exclude<Category, 'Todos'>;
  title: string;
}

export const categories: Category[] = ['Todos', 'Retrato', 'Editorial'];

export const photos: Photo[] = [
  {
    id: '1',
    src: retrato,
    alt: 'Retrato familiar a luz natural',
    category: 'Retrato',
    title: 'Luz familiar'
  },
  {
    id: '2',
    src: infantil,
    alt: 'Retrato infantil en campo',
    category: 'Retrato',
    title: 'Infancia'
  },
  {
    id: '3',
    src: arquitectura,
    alt: 'Retrato editorial en arquitectura colonial',
    category: 'Retrato',
    title: 'Esencia'
  },
  {
    id: '4',
    src: editorial1,
    alt: 'Retrato editorial nocturno',
    category: 'Editorial',
    title: 'Noche morada'
  },
  {
    id: '5',
    src: editorial2,
    alt: 'Retrato editorial en vestido verde',
    category: 'Editorial',
    title: 'Elegancia nocturna'
  },
  {
    id: '6',
    src: editorial3,
    alt: 'Retrato editorial con luces de ciudad',
    category: 'Editorial',
    title: 'Luces de la ciudad'
  },
  {
    id: '7',
    src: hero,
    alt: 'Retrato editorial atemporal',
    category: 'Editorial',
    title: 'Atemporal'
  },
  {
    id: '8',
    src: banner,
    alt: 'Retrato editorial con reflejos urbanos',
    category: 'Editorial',
    title: 'Reflejos'
  }
];