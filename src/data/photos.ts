import type { ImageMetadata } from 'astro';
import gallery01 from '../assets/images/gallery-01.jpg';
import gallery02 from '../assets/images/gallery-02.jpg';
import gallery03 from '../assets/images/gallery-03.jpg';
import gallery04 from '../assets/images/gallery-04.jpg';
import gallery05 from '../assets/images/gallery-05.jpg';
import gallery06 from '../assets/images/gallery-06.jpg';
import gallery07 from '../assets/images/gallery-07.jpg';
import gallery08 from '../assets/images/gallery-08.jpg';

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
    src: gallery01,
    alt: 'Retrato artístico en estudio con luz natural',
    category: 'Retrato',
    title: 'Conexión'
  },
  {
    id: '2',
    src: gallery02,
    alt: 'Retrato íntimo en exterior',
    category: 'Retrato',
    title: 'Mirada'
  },
  {
    id: '3',
    src: gallery03,
    alt: 'Sesión editorial urbana',
    category: 'Editorial',
    title: 'Urbano'
  },
  {
    id: '4',
    src: gallery04,
    alt: 'Composición editorial en locación',
    category: 'Editorial',
    title: 'Estructura'
  },
  {
    id: '5',
    src: gallery05,
    alt: 'Retrato editorial con luz dramática',
    category: 'Retrato',
    title: 'Drama'
  },
  {
    id: '6',
    src: gallery06,
    alt: 'Proyecto editorial de moda',
    category: 'Editorial',
    title: 'Elegancia'
  },
  {
    id: '7',
    src: gallery07,
    alt: 'Retrato creativo en locación',
    category: 'Retrato',
    title: 'Esencia'
  },
  {
    id: '8',
    src: gallery08,
    alt: 'Editorial nocturna con luces de ciudad',
    category: 'Editorial',
    title: 'Noche'
  }
];