import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import TermsPage from "./components/TermsPage";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import Media from 'react-media';
import Header from './components/Header';
import MdHeader from './components/MdHeader'
import ComingSoon from './components/ComingSoon';
import ThankYouContact from './components/ThankYouContact';
import MenuList from './components/menuPage/MenuList';
import SearchResult from './components/menuPage/SearchResult';
import NotFound from './components/menuPage/NotFound';
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import SelectedProduct from "./components/SelectedProduct";
import axios from "axios";

function App() {

  let [foodData,setFoodData] = useState()

  useEffect(() => {
    const getAllProducts = async ()=>{
    // let resp =  await fetch('./json/products.json');
    // let data = await resp.json();
    let resp = await axios.get('http://localhost:3002/menu')
    let data = await resp.data
    setFoodData(data);    
    };
    getAllProducts();
},[]);

  
  return (
    <div className="container-fluid">
      <Media query={{ maxWidth: 599 }}>
        {(matches) => (matches ? <MdHeader /> : <Header />)}
      </Media>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<MenuList foodData={foodData}/>}></Route>
        <Route path='/menu/:searchTerm' element={<SearchResult />}></Route> 
        <Route path='/notfound' element={<NotFound/>}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="location" element={<Location />} />
        <Route path="menu/item/:id" element={<SelectedProduct foodInfo={foodData}/>}/>
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="soon"  element={<ComingSoon/>}/>
        <Route path="thanks"  element={<ThankYouContact/>}/>

     
        <Route path='/signup' element={<Signup/>}></Route>

      </Routes>

  

      <Footer />
    </div>
  );
}

export default App;
