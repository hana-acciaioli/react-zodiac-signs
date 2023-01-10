import React from 'react';
import './Footer.css';
import footer from '../../footer.jpg';
export default function Footer() {
  return <footer style={{ backgroundImage: `URL(${footer})` }}>Thanks for visiting</footer>;
}
