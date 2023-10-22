import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterTagBar from "./FilterTagBar";

const MenuList = () => {
  let foodListData = JSON.parse(localStorage.getItem("FOOD_DATA_JSON"));

  return (
    <>
      <SearchBar foodList={foodListData} disabled={false} readOnly={false} />
      {<FilterTagBar />}
      <ProductList foodList={foodListData} />
    </>
  );
};

export default MenuList;
