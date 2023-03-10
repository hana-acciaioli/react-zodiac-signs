import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import background from './background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `URL(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
