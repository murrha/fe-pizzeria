import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import ProductDetails from './components/ProductDetails';

function App() {

  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {  
    const fetchData = async () => {
      let response = await fetch('/json/menuItems.json');
      let data = await response.json();
  
      setMenuItems(data); 
    };
   
    console.log("Inside useEffect, App.js")
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
      <Jumbotron/>
      <Carousel/>
      <Menu items={menuItems}/>

      <ProductDetails/>
    </div>
  );
}

export default App;
