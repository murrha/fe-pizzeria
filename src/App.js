import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
