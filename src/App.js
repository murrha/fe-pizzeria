import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className='container-fluid'>
      <Jumbotron/>
      <Carousel/>
      <Menu items={menuItems}/>

    </div>
  );
}

export default App;
