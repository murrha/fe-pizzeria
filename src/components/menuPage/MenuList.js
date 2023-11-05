import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterTagBar from "./FilterTagBar";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { getAllMenu } from "../../helperFunctions/getMenuData";

const MenuList = (props) => {
  const { foodData } = props;
  // const { foodData } = useContext(ShopContext);
  // const foodData = getAllMenu();
  // console.log("foodData in menu list: ", foodData);
  // const { cartItems } = useContext(ShopContext);
  // console.log("cartItems: ", cartItems);
  console.log("props in MenuList.js: ", props);
  console.log("asdfsd foodData in MenuList.js: ", foodData);

  return (
    <>
      {foodData && (
        <SearchBar foodList={foodData} disabled={false} readOnly={false} />
      )}
      {<FilterTagBar />}
      {foodData && <ProductList foodList={foodData} />}
    </>
  );
};

export default MenuList;
