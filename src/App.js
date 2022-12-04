import React from 'react'
import "./App.css";
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';

const App = () => {
  return (
    <>
     <div className="app-main">
     <div className="container-fluid">
      <div className="container">
      <div className="app-content">
      <Header />
      <Home />
      <Footer />
      </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App