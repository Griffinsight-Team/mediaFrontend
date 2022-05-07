import logo from './logo.svg';
import './App.css';

import React from 'react';
import APPbar from './components/APPBar';
import DesktopMain from './views/desktopmain';
import Main from './views/main';
import Home from './views/home';
import Footer from './components/footerDesktop';
function App() {
  return (
    <>
    <APPbar/>
    <Main/>
    
    </>
  );
}

export default App;