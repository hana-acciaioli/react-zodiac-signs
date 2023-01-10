import React from 'react';
import './Header.css';
import footer from '../../footer.jpg';
export default function Header() {
  return <header style={{ backgroundImage: `URL(${footer})` }}>Zodiac Signs</header>;
}
