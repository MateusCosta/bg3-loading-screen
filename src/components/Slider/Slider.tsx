import React from 'react'
import './style.css';
export const Slider = (props) => {
  return (
   <div className="imageContainer" style={{background: `no-repeat radial-gradient(circle, rgba(0,0,0,1) 0%, transparent 0%, rgba(0,0,0,1) 90%), url(${props.imageURL})`, backgroundSize: 'cover'}}>
    {props.children}
   </div>
  )
}
