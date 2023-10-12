import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Location from './components/Location';
import TermsPage from './components/TermsPage';
import PageNotFound from './components/PageNotFound';
import Homepage from './components/Homepage';
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
  <div className="container-fluid">

    <Routes>
 

      <Route path="/" element={<Homepage/>} />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="faq" element={<FAQ/>}/>
      <Route path="location" element={<Location/>}/>
      <Route path="terms" element={<TermsPage/>}/>
      <Route path="*"  element={<PageNotFound/>}/> 

    </Routes>

    <Footer />
  </div>
);
}

export default App;