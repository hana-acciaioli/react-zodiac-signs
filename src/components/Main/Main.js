import React from 'react';
import './Main.css';
import signs from '../../data.js';
import background from '../../background.jpg';
import Sign from '../Sign/Sign';

export default function Main() {
  return (
    <main style={{ backgroundImage: `URL(${background})` }}>
      {signs.map((sign) => (
        <Sign key={sign.id} name={sign.name} dates={sign.dates} type={sign.symbol} />
      ))}
    </main>
  );
}
