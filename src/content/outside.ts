export interface OutsideItem {
  name: string;
  description: string;
  category: string;
  image: string;
  /** CSS object-position, for framing portrait photos in the 4:3 crop. */
  focus?: string;
}

export const outside: OutsideItem[] = [
  {
    name: 'Exploring new places',
    description: 'I’ve traveled across 25 Indian states, 16 U.S. states, and Brazil.',
    category: 'Travel',
    image: '/travel.jpg',
    focus: '50% 62%',
  },
  {
    name: 'Cooking',
    description: 'I still cook the food I built Sortizy around.',
    category: 'Kitchen',
    image: '/cooking.jpg',
    focus: '50% 50%',
  },
];
