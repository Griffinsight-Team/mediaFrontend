import logo from './logo.svg';
import './App.css';

import React from 'react';
import RichText from './components/richText'
import APPBar from './components/APPBar'
import NavBar from './components/navbar';
import Home from './views/home'
import Main from './views/main'
function App() {
  return (
    <div className="App">
      <APPBar/>
     
   
     
      <Main/>
      <Home/>
      
    </div>
  );
}

export default App;