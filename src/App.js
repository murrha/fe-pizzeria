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

function App() {
  return (
    <div className="container-fluid">
      <Media query={{ maxWidth: 599 }}>
        {(matches) => (matches ? <MdHeader /> : <Header />)}
      </Media>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<MenuList/>}></Route>
        <Route path='/menu/:searchTerm' element={<SearchResult />}></Route> 
        <Route path='/notfound' element={<NotFound/>}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="location" element={<Location />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="soon"  element={<ComingSoon/>}/>
        <Route path="thanks"  element={<ThankYouContact/>}/>

     

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
