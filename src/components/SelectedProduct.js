import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SelectedProduct = (props) => {

     //UseParams
    let paramsObj = useParams(); 
    console.log("useParams: " + paramsObj.id);
    console.log(props.foodInfo);

    let selectedFood = props.foodInfo.find((food) => food.id == paramsObj.id);
    console.log(selectedFood);


    return ( <>
        <ProductDetails food={selectedFood}/>
    </> );
}
 
export default SelectedProduct;