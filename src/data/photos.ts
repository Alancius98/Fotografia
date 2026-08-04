export type Category = 'Todos' | 'Retrato' | 'Eventos' | 'Comercial';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'Todos'>;
  title: string;
}

export const categories: Category[] = ['Todos', 'Retrato', 'Eventos', 'Comercial'];

export const photos: Photo[] = [
  {
    id: '1',
    src: '/images/photo-0.jpg',
    alt: 'Retrato artístico en estudio',
    category: 'Retrato',
    title: 'Luz natural'
  },
  {
    id: '2',
    src: '/images/retrato.jpg',
    alt: 'Retrato familiar a luz natural',
    category: 'Retrato',
    title: 'Luz de retrato'
  },
  {
    id: '3',
    src: '/images/photo-10.jpg',
    alt: 'Sesión comercial para marca',
    category: 'Comercial',
    title: 'Identidad visual'
  },
  {
    id: '4',
    src: '/images/photo-100.jpg',
    alt: 'Cobertura de evento corporativo',
    category: 'Eventos',
    title: 'Momentum'
  },
  {
    id: '5',
    src: '/images/photo-101.jpg',
    alt: 'Fotografía de producto',
    category: 'Comercial',
    title: 'Detalles'
  },
  {
    id: '6',
    src: '/images/photo-102.jpg',
    alt: 'Retrato lifestyle al aire libre',
    category: 'Retrato',
    title: 'Alma libre'
  },
  {
    id: '7',
    src: '/images/photo-103.jpg',
    alt: 'Celebración privada',
    category: 'Eventos',
    title: 'Instantes'
  },
  {
    id: '8',
    src: '/images/photo-104.jpg',
    alt: 'Campaña publicitaria',
    category: 'Comercial',
    title: 'Narrativa'
  }
];
