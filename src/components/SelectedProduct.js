import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const SelectedProduct = (props) => {
  //UseParams
  let paramsObj = useParams();
  console.log("useParams: " + paramsObj.id);
  console.log("props.foodInfo: ", props.foodInfo);
  const { foodData } = useContext(ShopContext);
  console.log("foodData in selected products: ", foodData);
  console.log(
    "local storage menu data",
    JSON.parse(window.localStorage.getItem("MENU_DATA"))
  );

  let foodDataList;
  if (foodData == null || foodData == undefined) {
    foodDataList = JSON.parse(window.localStorage.getItem("MENU_DATA"));
  } else {
    foodDataList = foodData;
  }

  while (foodDataList == undefined) {
    console.log("Loading...");
  }

  let selectedFood = foodDataList.find(
    (food) => food.id === parseInt(paramsObj.id)
  );
  console.log("selectedFood: ", selectedFood);

  return (
    <>
      {" "}
      <ProductDetails food={selectedFood} />{" "}
    </>
  );
};

export default SelectedProduct;
