export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  alt: string;
  specifications: ProductSpecification[];
  isLiked: boolean;
}

export interface CatalogSection {
  title: string;
  description: string;
  products: Product[];
}

export const CATALOG_DATA: CatalogSection[] = [
  {
    title: 'Бани-бочки',
    description: 'Классические бани-бочки из натурального дерева для комфортного отдыха',
    products: [
      {
        id: 'barrel-2m',
        name: 'Баня-бочка 2 метра',
        image: 'assets/images/bani-bochki/barrel-sauna-2-meters-wooden.png',
        alt: 'Баня-бочка 2 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,8 м' }
        ]
      },
      {
        id: 'barrel-3m',
        name: 'Баня-бочка 3 метра',
        image: 'assets/images/bani-bochki/barrel-sauna-3-meters-cedar.png',
        alt: 'Баня-бочка 3 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,8 м' }
        ]
      },
      {
        id: 'barrel-4m',
        name: 'Баня-бочка 4 метра',
        image: 'assets/images/bani-bochki/barrel-sauna-4-meters-premium.png',
        alt: 'Баня-бочка 4 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,9 м' }
        ]
      },
      {
        id: 'barrel-5m',
        name: 'Баня-бочка 5 метров',
        image: 'assets/images/bani-bochki/barrel-sauna-5-meters-luxury.png',
        alt: 'Баня-бочка 5 метров',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Комната отдыха:', value: '1,7 м' },
          { label: 'Душевая:', value: '1,2 м' },
          { label: 'Парильное помещение:', value: '1,9 м' }
        ]
      },
      {
        id: 'barrel-6m',
        name: 'Баня-бочка 6 метров',
        image: 'assets/images/bani-bochki/barrel-sauna-6-meters-professional.png',
        alt: 'Баня-бочка 6 метров',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Комната отдыха:', value: '2 м' },
          { label: 'Душевая:', value: '2 м' },
          { label: 'Парильное помещение:', value: '2 м' }
        ]
      }
    ]
  },
  {
    title: 'Квадро-бани',
    description: 'Современные квадро-бани с квадратной формой и расширенным функционалом',
    products: [
      {
        id: 'quadro-3m',
        name: 'Баня квадро-бочка 3 метра',
        image: 'assets/images/kvadro-bani/quadro-sauna-3-meters-luxury.png',
        alt: 'Баня квадро-бочка 3 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,8 м' }
        ]
      },
      {
        id: 'quadro-4m',
        name: 'Баня квадро-бочка 4 метра',
        image: 'assets/images/kvadro-bani/quadro-sauna-4-meters-premium.png',
        alt: 'Баня квадро-бочка 4 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,9 м' }
        ]
      },
      {
        id: 'quadro-5m',
        name: 'Баня квадро-бочка 5 метров',
        image: 'assets/images/kvadro-bani/quadro-sauna-5-meters-deluxe.png',
        alt: 'Баня квадро-бочка 5 метров',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Комната отдыха:', value: '1,7 м' },
          { label: 'Душевая:', value: '1,2 м' },
          { label: 'Парильное помещение:', value: '1,9 м' }
        ]
      },
      {
        id: 'quadro-6m',
        name: 'Баня квадро-бочка 6 метров',
        image: 'assets/images/kvadro-bani/quadro-sauna-6-meters-professional.png',
        alt: 'Баня квадро-бочка 6 метров',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Комната отдыха:', value: '2 м' },
          { label: 'Душевая:', value: '2 м' },
          { label: 'Парильное помещение:', value: '2 м' }
        ]
      }
    ]
  }
];
