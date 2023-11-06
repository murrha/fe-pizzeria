import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import FilterTagBar from "./FilterTagBar";

const MenuList = (props) => {
  const { foodData } = props;
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
