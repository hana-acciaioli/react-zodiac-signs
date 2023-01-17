import React from 'react';
import './Sign.css';
export default function Sign(props) {
  return (
    <div className="sign">
      <img src={`zodiac_images/${props.name}.png`}></img>
      <h2 className="name">{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
