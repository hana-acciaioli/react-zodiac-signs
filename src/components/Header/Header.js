import React from 'react';
import './Header.css';
import footer from '../../footer.jpg';
export default function Header() {
  return (
    <header style={{ backgroundImage: `URL(${footer})` }}>
      <h2 className="header">Zodiac Signs</h2>
    </header>
  );
}
