import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Location from './components/Location';
import TermsPage from './components/TermsPage';
import PageNotFound from './components/PageNotFound';
import Homepage from "./components/Homepage";
import Media from 'react-media';
import Header from './components/Header';
import MdHeader from './components/MdHeader'
import ComingSoon from './components/ComingSoon';
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
<Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
             <MdHeader/>
            ) : (
              <Header/>
            )
          }
        </Media>
    <Routes>
 

      <Route path="/" element={<Homepage/>} />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="faq" element={<FAQ/>}/>
      <Route path="location" element={<Location/>}/>
      <Route path="terms" element={<TermsPage/>}/>
      <Route path="*"  element={<PageNotFound/>}/> 
      <Route path="soon"  element={<ComingSoon/>}/> 

    </Routes>

    <Footer />
  </div>
);



}

export default App;