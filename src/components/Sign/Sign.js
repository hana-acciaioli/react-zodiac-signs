import React from 'react';
import './Sign.css';
export default function Sign(props) {
  return (
    <div className="sign">
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
