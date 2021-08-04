import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Dropdown from './components/Dropdown';
import Install from './pages/Install';


function App() {

const [isOpen, setIsOpen ] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
};

useEffect(() => {
  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);      
    }
  };

  window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
});

  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Product} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/install" exact component={Install} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
