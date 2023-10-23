import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SelectedProduct = (props) => {
  //UseParams
  let paramsObj = useParams();
  console.log("useParams: " + paramsObj.id);
  console.log("props.foodInfo: ", props.foodInfo);

  let selectedFood = props.foodInfo.find(
    (food) => food.id === parseInt(paramsObj.id)
  );
  console.log("selectedFood: ", selectedFood);

  return (
    <>
      <ProductDetails food={selectedFood} />
    </>
  );
};

export default SelectedProduct;
