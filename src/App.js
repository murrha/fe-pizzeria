import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import TermsPage from "./components/TermsPage";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import MenuList from "./components/menuPage/MenuList";
import SearchResult from "./components/menuPage/SearchResult";
import NotFound from "./components/menuPage/NotFound";

import Media from "react-media";
import Header from "./components/Header";
import MdHeader from "./components/MdHeader";
import ComingSoon from "./components/ComingSoon";
import ThankYouContact from "./components/ThankYouContact";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import SelectedProduct from "./components/SelectedProduct";
import axios from "axios";
import { ShopContextProvider } from "./context/shop-context";
import { ToastContainer } from "react-toastify";
// import { useContext } from "react";
// import { ShopContext } from "./context/shop-context";

function App() {
  let [foodData, setFoodData] = useState();
  // const { cartItems } = useContext(ShopContext);
  // console.log("cartItems at app.js: ", cartItems);

  useEffect(() => {
    const getAllProducts = async () => {
      // let resp =  await fetch('./json/products.json');
      // let data = await resp.json();
      let data;
      do {
        let resp = await axios.get("http://localhost:3002/menu");
        data = await resp.data;
      } while (data == null);
      console.log("data: ", data);
      setFoodData(data);
    };
    getAllProducts();
  }, []);

  return (
    <div className="container-fluid">
      <ShopContextProvider>
        <ToastContainer />
        <Media query={{ maxWidth: 768 }}>
          {(matches) => (matches ? <MdHeader /> : <Header />)}
        </Media>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/menu"
            element={<MenuList foodData={foodData} />}
          ></Route>
          <Route path="/menu/:searchTerm" element={<SearchResult />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="location" element={<Location />} />
          <Route
            path="menu/item/:id"
            element={<SelectedProduct foodInfo={foodData} />}
          />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="soon" element={<ComingSoon />} />
          <Route path="thanks" element={<ThankYouContact />} />

          <Route path="/signup" element={<Signup />}></Route>
        </Routes>

        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
