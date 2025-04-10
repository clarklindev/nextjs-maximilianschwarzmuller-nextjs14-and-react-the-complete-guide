'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

const url = `https://clarklindev-nextjs-react-the-complete-guide-03-3-foodies.s3.ap-southeast-1.amazonaws.com/images/foodies/`;
console.log('my url: ', url);
        
const images = [
  { image: 'burger.jpg', alt: 'A delicious, juicy burger' },
  { image: 'curry.jpg', alt: 'A delicious, spicy curry' },
  { image: 'dumplings.jpg', alt: 'Steamed dumplings' },
  { image: 'macncheese.jpg', alt: 'Mac and cheese' },
  { image: 'pizza.jpg', alt: 'A delicious pizza' },
  { image: 'schnitzel.jpg', alt: 'A delicious schnitzel' },
  { image: 'tomato-salad.jpg', alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => {

      const link = `${url}${image.image}`;
      console.log("link: ", link);

      return (<Image
          key={index}
          src={link}
          className={index === currentImageIndex ? classes.active : ''}
          fill
          alt={image.alt}
        />
      )})
    }
    </div>
  );
}