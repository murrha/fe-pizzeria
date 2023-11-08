import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop-context";
// import foodData from "../products.json";

const CartItem = (props) => {
  let { index } = props;
  const { foodData } = useContext(ShopContext);

  let foodDataList;
  if (foodData == null || foodData == undefined) {
    foodDataList = JSON.parse(window.localStorage.getItem("MENU_DATA"));
  } else {
    foodDataList = foodData;
  }

  console.log(">>>foodData<<<: ", foodData);
  console.log(">>>index in cartItem<<<: ", index);
  console.log(">>>foodDataList: " + foodDataList); 
  console.log(">>>Local storage key: " +  JSON.parse(window.localStorage.getItem("MENU_DATA".id))); 

  // console.log(foodData[10].name, foodData[10].price);
  const { addToCart, removeFromCart, getCartItemCount, updateCartItemCount } =
    useContext(ShopContext);

  // let [foodData, setFoodData] = useState();
  // const { cartItems } = useContext(ShopContext);
  // console.log("cartItems at app.js: ", cartItems);

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     // let resp =  await fetch('./json/products.json');
  //     // let data = await resp.json();
  //     let data;
  //     do {
  //       let resp = await axios.get("http://localhost:3002/menu");
  //       data = await resp.data;
  //     } while (data == null);
  //     console.log("data: ", data);
  //     setFoodData(data);
  //   };
  //   getAllProducts();
  // }, []);

  return (
    <>
      <p>
        <h5>{foodDataList[index - 1].name} {foodDataList[index - 1].price}</h5>

        <img src={`${foodDataList[index - 1].image}`} alt={foodDataList[index - 1].name}/>
      </p>
      <div className="input-group mb-3 mt-3">
        {getCartItemCount(index) <= 0 ? (
          <button className="btn btn-outline-secondary disabled px-2">-</button>
        ) : (
          <button
            className="btn btn-secondary px-2"
            onClick={() => removeFromCart(index)}
          >
            -
          </button>
        )}
        <input
          className="text-center col-sm-3"
          value={getCartItemCount(index)}
          onChange={(e) => {
            // console.log("e.target.value: ", e.target.value);
            updateCartItemCount(Number(e.target.value), index);
          }}
        />
        <button
          className="btn btn-secondary px-2"
          onClick={() => addToCart(index)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CartItem;
