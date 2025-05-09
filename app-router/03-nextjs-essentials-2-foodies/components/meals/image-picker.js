"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handlePickClick = ()=>{
    imageInput.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if(!file){
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);

  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>

    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>no image picked yet..</p>}
        {pickedImage && <Image src={pickedImage} alt="selected image" fill/>}
      </div>
      <input ref={imageInput} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} onChange={handleImageChange} required/>
      <button className={classes.button} type="button" onClick={handlePickClick}>pick an image</button>
    </div>
  </div>
}