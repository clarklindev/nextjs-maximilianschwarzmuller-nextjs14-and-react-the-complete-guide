'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';

import classes from './image-slideshow.module.css';

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
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images/foodies/${image.image}`}
          className={index === currentImageIndex ? classes.active : ''}
          fill 
          alt={image.alt}
        />
      ))}
    </div>
  );
}