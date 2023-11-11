import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterTagBar from "./FilterTagBar";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import BackToTopButton from "./BackToTopButton";

const MenuList = ({ foodData }) => {
  const { cartItems } = useContext(ShopContext);
  console.log("cartItems: ", cartItems);
  return (
    <>
    <div>
      {foodData && (
        <SearchBar foodList={foodData} disabled={false} readOnly={false} />
      )}
      {<FilterTagBar />}
      {foodData && <ProductList foodList={foodData} />}
      </div>
      <BackToTopButton/>
    </>
  );
};

export default MenuList;
