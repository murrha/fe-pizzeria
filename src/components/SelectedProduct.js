import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SelectedProduct = () => {
  let foodListData = JSON.parse(localStorage.getItem("FOOD_DATA_JSON"));

  //UseParams
  let paramsObj = useParams();
  console.log("useParams: " + paramsObj.id);

  let selectedFood = foodListData.find((food) => {
    console.log("food.id: ", food.id, "paramsObj.id: ", paramsObj.id);
    return food.id === parseInt(paramsObj.id);
  });
  console.log("selectedFood: ", selectedFood);

  return (
    <>
      <ProductDetails food={selectedFood} />
    </>
  );
};

export default SelectedProduct;
