import { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import Menu from "./Menu";
import axios from "axios";

const Homepage = () => {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let response = await fetch("/json/menuItems.json");
      // let data = await response.json();

      let data;
      do{
        let resp = await axios.get("http://localhost:3002");
        data = await resp.data;
      }while(data == null);
      setMenuItems(data);
    };

    // console.log("Inside useEffect, App.js");
    fetchData();
  }, []);
  return (
    <>
      <Jumbotron />
      <Carousel />
      <Menu items={menuItems} />
    </>
  );
};

export default Homepage;
