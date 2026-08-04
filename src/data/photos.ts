export type Category = 'Todos' | 'Retrato' | 'Editorial';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'Todos'>;
  title: string;
}

export const categories: Category[] = ['Todos', 'Retrato', 'Editorial'];

export const photos: Photo[] = [
  {
    id: '1',
    src: '/images/retrato.jpg',
    alt: 'Retrato familiar a luz natural',
    category: 'Retrato',
    title: 'Luz familiar'
  },
  {
    id: '2',
    src: '/images/infantil.jpg',
    alt: 'Retrato infantil en campo',
    category: 'Retrato',
    title: 'Infancia'
  },
  {
    id: '3',
    src: '/images/arquitectura.jpg',
    alt: 'Retrato editorial en arquitectura colonial',
    category: 'Retrato',
    title: 'Esencia'
  },
  {
    id: '4',
    src: '/images/editorial-1.jpg',
    alt: 'Retrato editorial nocturno',
    category: 'Editorial',
    title: 'Noche morada'
  },
  {
    id: '5',
    src: '/images/editorial-2.jpg',
    alt: 'Retrato editorial en vestido verde',
    category: 'Editorial',
    title: 'Elegancia nocturna'
  },
  {
    id: '6',
    src: '/images/editorial-3.jpg',
    alt: 'Retrato editorial con luces de ciudad',
    category: 'Editorial',
    title: 'Luces de la ciudad'
  },
  {
    id: '7',
    src: '/images/hero.jpg',
    alt: 'Retrato editorial atemporal',
    category: 'Editorial',
    title: 'Atemporal'
  },
  {
    id: '8',
    src: '/images/banner.jpg',
    alt: 'Retrato editorial con reflejos urbanos',
    category: 'Editorial',
    title: 'Reflejos'
  }
];
