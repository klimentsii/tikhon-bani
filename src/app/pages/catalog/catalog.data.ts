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
          { label: 'Парильное помещение:', value: '1,8 м' },
          { label: 'Цена:', value: '3900 BYN' },
          { label: 'Рассрочка:', value: 'от 110 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '1,8 м' },
          { label: 'Цена:', value: '4800 BYN' },
          { label: 'Рассрочка:', value: 'от 130 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '1,9 м' },
          { label: 'Цена:', value: '6600 BYN' },
          { label: 'Рассрочка:', value: 'от 170 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '1,9 м' },
          { label: 'Цена:', value: '7900 BYN' },
          { label: 'Рассрочка:', value: 'от 310 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '2 м' },
          { label: 'Цена:', value: '9700 BYN' },
          { label: 'Рассрочка:', value: 'от 310 BYN' },
        ],
      },
    ],
  },
  {
    title: 'Квадро-бани',
    description: 'Современные квадро-бани с квадратной формой и расширенным функционалом',
    products: [
      {
        id: 'quadro-2m',
        name: 'Баня квадро-бочка 2 метра',
        image: 'assets/images/kvadro-bani/quadro-sauna-2-meters-basic.png',
        alt: 'Баня квадро-бочка 2 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,75 м' },
          { label: 'Цена:', value: '4300 BYN' },
          { label: 'Рассрочка:', value: 'от 130 BYN' },
        ],
      },
      {
        id: 'quadro-3m',
        name: 'Баня квадро-бочка 3 метра',
        image: 'assets/images/kvadro-bani/quadro-sauna-3-meters-luxury.png',
        alt: 'Баня квадро-бочка 3 метра',
        isLiked: false,
        specifications: [
          { label: 'Ширина:', value: '2,2 м' },
          { label: 'Высота:', value: '2 м' },
          { label: 'Парильное помещение:', value: '1,8 м' },
          { label: 'Цена:', value: '5500 BYN' },
          { label: 'Рассрочка:', value: 'от 165 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '1,9 м' },
          { label: 'Цена:', value: '7300 BYN' },
          { label: 'Рассрочка:', value: 'от 190 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '1,9 м' },
          { label: 'Цена:', value: '11500 BYN' },
          { label: 'Рассрочка:', value: 'от 350 BYN' },
        ],
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
          { label: 'Парильное помещение:', value: '2 м' },
          { label: 'Цена:', value: '12420 BYN' },
          { label: 'Рассрочка:', value: 'от 410 BYN' },
        ],
      },
    ],
  },
];
