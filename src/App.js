import "./App.css";
import Media from 'react-media';
import Header from './components/Header';
import MdHeader from './components/MdHeader'
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

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
      </Routes>
    </div>
  );
}

export default App;
