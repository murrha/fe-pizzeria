import "./App.css";
import Media from 'react-media';
import Header from './components/Header';
import MdHeader from './components/MdHeader'
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MenuList from './components/menuPage/MenuList';
import SearchResult from './components/menuPage/SearchResult';
import NotFound from './components/menuPage/NotFound';

function App() {
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
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<MenuList/>}></Route>
        <Route path='/menu/:searchTerm' element={<SearchResult />}></Route> 
        <Route path='/notfound' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
