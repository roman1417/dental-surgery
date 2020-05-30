import articles from './articles';
import img1small from '../images/header1_640.jpg';
import img1medium from '../images/header1_1280.jpg';
import img1big from '../images/header1_1920.jpg';
import img2small from '../images/header2_640.jpg';
import img2medium from '../images/header2_1280.jpg';
import img2big from '../images/header2_1920.jpg';
import img3small from '../images/header3_640.jpg';
import img3medium from '../images/header3_1280.jpg';
import img3big from '../images/header3_1920.jpg';

export default [
  {
    srcSet: `${img1small} 640w, ${img1medium} 1280w, ${img1big} 1920w`,
    src: img1big,
    alt: 'Nagłówek - zdjęcie 1',
    text: articles[0].title,
  },
  {
    srcSet: `${img2small} 640w, ${img2medium} 1280w, ${img2big} 1920w`,
    src: img2big,
    alt: 'Nagłówek - zdjęcie 2',
    text: articles[1].title,
  },
  {
    srcSet: `${img3small} 640w, ${img3medium} 1280w, ${img3big} 1920w`,
    src: img3big,
    alt: 'Nagłówek - zdjęcie 3',
    text: articles[2].title,
  },
];