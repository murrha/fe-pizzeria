import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import Media from 'react-media';
import Header from './components/Header';
import MdHeader from './components/MdHeader'


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
       <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
             <MdHeader/>
            ) : (
              <Header/>
            )
          }
        </Media>
      <Jumbotron/>
      <Carousel/>
      <Menu items={menuItems}/>
     
    </div>
  );
}

export default App;
