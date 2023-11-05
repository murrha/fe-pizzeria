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
// import { useEffect, useState, useContext } from "react";
import SelectedProduct from "./components/SelectedProduct";
// import axios from "axios";
import { ShopContextProvider } from "./context/shop-context";
import { DataContextProvider } from "./context/data-context";
import { ToastContainer } from "react-toastify";
// import foodData from "../src/products.json";
// import { useContext } from "react";
// import { ShopContext } from "./context/shop-context";
import Cart from "./components/Cart";

import { getAllMenu } from "./helperFunctions/getMenuData";

function App() {
  // const fetchAllMenuAtApp = async () => {
  //   let data;
  //   let resp = await axios.get("http://localhost:3002/menu");
  //   await console.log("resp: ", resp);
  //   data = await resp.data;
  //   await console.log(">>> START data: ", data);
  //   await window.localStorage.setItem("MENU_DATA", JSON.stringify(data));
  // };
  // const getAllMenuAtApp = async () => {
  //   await console.log(
  //     "JSON.parse(window.localStorage.getItem('MENU_DATA')) == null: ",
  //     JSON.parse(window.localStorage.getItem("MENU_DATA")) == null
  //   );
  //   if ((await JSON.parse(window.localStorage.getItem("MENU_DATA"))) == null) {
  //     fetchAllMenuAtApp();
  //   }
  //   let data = await JSON.parse(window.localStorage.getItem("MENU_DATA"));
  //   return data;
  // };
  // const { getAllMenu } = useContext(ShopContextProvider);
  // foodData = useContext(ShopContext);
  console.log("getAllMenu() in app.js: ", getAllMenu());
  // console.log("getAllMenu() is array?: ", Array.isArray(getAllMenu()));
  const foodData = JSON.parse(window.localStorage.getItem("MENU_DATA"));
  console.log(">>> foodData in App.js: ", foodData);
  // console.log(
  //   "foodData.foodList is array?: ",
  //   Array.isArray(foodData.foodList)
  // );
  // let arrayOfValues = Promise.all(foodData);
  // console.log("arrayOfValues: ", arrayOfValues);

  // const getAllMenu = async () => {
  //   let data;
  //   do {
  //     let resp = await axios.get("http://localhost:3002/menu");
  //     data = await resp.data;
  //   } while (data == null || data == undefined);
  //   console.log("data in getAllMenu: ", data);
  //   return data;
  // };
  // let [foodData, setFoodData] = useState();

  // useEffect(() => {
  //   const getAllMenu = async () => {
  //     let data;
  //     do {
  //       let resp = await axios.get("http://localhost:3002/menu");
  //       console.log("resp: ", resp);
  //       data = await resp.data;
  //       console.log("data: ", data);
  //     } while (data == null || data == undefined);
  //     setFoodData(data);
  //     return data;
  //   };
  //   getAllMenu();
  // }, []);

  // const getAllMenu = async () => {
  //   let data;
  //   let resp = await axios.get("http://localhost:3002/menu");
  //   console.log("resp: ", resp);
  //   data = await resp.data;
  //   console.log("data: ", data);
  //   return data;
  // };
  // let foodData = getAllMenu();

  // let [foodData, setFoodData] = useState();
  // const { getAllMenu } = useContext(ShopContext);
  // foodData = useContext(ShopContext);

  // while (isLoading) {
  //   setTimeout(() => {
  //     console.log("Loading...");
  //   }, 2000);
  // }
  // let foodData = JSON.parse(window.localStorage.getItem("MENU_DATA"));
  // if (foodData == null) {
  //   getAllMenu();
  // }
  // foodData = JSON.parse(window.localStorage.getItem("MENU_DATA"));
  console.log("foodData at app.js: ", foodData);
  // if (foodData == undefined || foodData == null) {
  //   setmenuLocalStorageExist(false);
  // }

  // console.log("cartItems at app.js: ", cartItems);

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     // let resp =  await fetch('./json/products.json');
  //     // let data = await resp.json();
  //     let data;
  //     do {
  //       let resp = await axios.get("http://localhost:3002/menu");
  //       data = await resp.data;
  //     } while (data == null || data == undefined);
  //     console.log("data: ", data);
  //     setFoodData(data);
  //   };
  //   getAllProducts();
  // }, []);

  return (
    <div className="container-fluid">
      <DataContextProvider>
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
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </ShopContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
