import logo from './logo.svg';
import React from 'react';
import NavBar from './components/NavBar';
import TypingZone from './components/TypingZone';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <TypingZone/>
      <Footer/>
    </div>
  );
}

export default App;
