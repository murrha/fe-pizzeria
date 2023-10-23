// import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const ProductDetails = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  console.log("props.food: ", props.food);
  console.log("props.food.id: ", props.food.id);
  console.log("cartItems: ", cartItems);

  //loading screen
  if (!props.food) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="card mx-auto w-75 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={`${props.food.image}`}
              alt={`${props.food.name}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title mt-4">{props.food.name}</h4>
              <h5>{props.food.price}</h5>
              <p className="card-text">{props.food.description}</p>

              {/* <div className="input-group mb-3 mt-3">
                {getCartCount() <= 1 ? (
                  <button className="btn btn-outline-secondary disabled px-2">
                    -
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary px-2"
                    onClick={() => removeFromCart(props.food.id)}
                  >
                    -
                  </button>
                )}
                <input
                  className="text-center col-sm-3"
                  value={getCartCount()}
                />
                <button
                  className="btn btn-secondary px-2"
                  onClick={() => addToCart(props.food.id)}
                >
                  +
                </button>
              </div> */}
              <button
                className="btn btn-warning"
                onClick={() => addToCart(props.food.id)}
                // onClick={() => getTotalCartAmount()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
