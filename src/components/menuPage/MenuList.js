import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterTagBar from "./FilterTagBar";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const MenuList = ({ foodData }) => {
  const { cartItems } = useContext(ShopContext);
  console.log("cartItems: ", cartItems);
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
