import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shop-context";
// import foodData from "../products.json";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log("cart items in cart page: ", cartItems);
  //   console.log("foodData: ", foodData[2]);

  Object.keys(cartItems).map((idx) => {
    // if (cartItems[idx] > 0) {
    console.log("idx: ", idx);
    console.log("Object.keys: ", cartItems[idx]);
  });

  return (
    <>
      <div className="container">
        <h1>Your Cart</h1>
        {Object.keys(cartItems).map((idx) => {
          if (cartItems[idx] > 0) {
            console.log("idx: ", idx);
            console.log("Object.keys: ", cartItems[idx]);
            return <CartItem index={parseInt(idx)} key={idx} />;
          }
        })}
        {getTotalCartAmount().toFixed(2) == 0.0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <b>Total: {getTotalCartAmount().toFixed(2)}</b>
            <div>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
