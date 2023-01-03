import _img1 from '../assets/Espro-Press-P7.jpg';
import _img2 from '../assets/p8.jpeg';
export enum Rating {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
}
export interface Articles {
  stars: Rating;
  title: string;
  price: number;
  img_src: string;
}

export let articles: Articles[] = [
  {
    stars: Rating.five,
    title: 'ESPRO COFFEE FRENCH PRESS P7 ',
    price: 109.95,
    img_src: _img1,
  },
  {
    stars: Rating.four,
    title: 'ESPRO COFFEE FRENCH PRESS P6 ',
    price: 89.95,
    img_src: _img2,
  },
  {
    stars: Rating.one,
    title: 'ESPRO COFFEE FRENCH PRESS P12 ',
    price: 109.95,
    img_src: _img1,
  },
  {
    stars: Rating.two,
    title: 'ESPRO COFFEE FRENCH PRESS P16 ',
    price: 89.95,
    img_src: _img2,
  },
];
