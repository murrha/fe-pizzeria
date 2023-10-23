import { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import Menu from "./Menu";

const Homepage = () => {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("/json/menuItems.json");
      let data = await response.json();

      setMenuItems(data);
    };

    console.log("Inside useEffect, App.js");
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
