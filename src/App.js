import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import {Routes, Route} from 'react-router-dom'
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

  const renderPage = (path) =>{
    if(path ==='/soon'){
      return<ComingSoon/>
    }



return (

    <div className='container-fluid'>
     
     <Jumbotron/>
      <Carousel/>
      <Menu items={menuItems}/>


    
    </div>
    
  );
}
 
return (
  <div className="container-fluid">
    <Routes>
      <Route path="/" element={renderPage("/")} />
      <Route path="/soon" element={renderPage("/soon")}/>
    </Routes>

    <Footer />
  </div>
);
}

export default App;