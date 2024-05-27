"use client";
import { useRef } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){

  const imageInput = useRef();

  const handlePickClick = ()=>{
    imageInput.current.click();
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <input ref={imageInput} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name}/>
      <button className={classes.button} type="button" onClick={handlePickClick}>pick an image</button>
    </div>
  </div>
}