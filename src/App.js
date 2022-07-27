import React from 'react';
import './App.css';

import Converter from './Components/Converter.js';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';







const App = () => {
  return (
    <div classname="App">
      <Header/>
      <Converter/>
      <Footer/>
    </div>
  );
}









export default App;

