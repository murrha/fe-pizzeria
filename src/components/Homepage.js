import { useState } from "react";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import Menu from "./Menu";

const Homepage = () => {
  let [menuItems] = useState([]);

  return (
    <>
      <Jumbotron />
      <Carousel />
      <Menu items={menuItems} />
    </>
  );
};

export default Homepage;
