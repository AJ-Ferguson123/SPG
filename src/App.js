import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Dropdown from './components/Dropdown';


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
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
