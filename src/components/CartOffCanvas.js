// import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
// import foodData from "../products.json";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartOffCanvas = () => {
  const { cartItems, GetTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  // console.log("foodData: ", foodData[2]);

  // let [foodData, setFoodData] = useState();
  // console.log("foodData: ", foodData);

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     // let resp =  await fetch('./json/products.json');
  //     // let data = await resp.json();
  //     let data;
  //     do {
  //       let resp = await axios.get("http://localhost:3002/menu");
  //       data = await resp.data;
  //     } while (data === null || data === undefined);
  //     console.log("data: ", data);
  //     setFoodData(data);
  //   };
  //   getAllProducts();
  // }, []);

  return (
    <>
      <div
        className="offcanvas offcanvas-end z-5"
        tabIndex="-1"
        id="cart"
        aria-labelledby="cartLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="cartLabel">
            Cart
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {Object.keys(cartItems).map((idx) => {
            if (cartItems[idx] > 0) {
              console.log("idx: ", idx);
              console.log("Object.keys: ", cartItems[idx]);
              return <CartItem index={parseInt(idx)} key={idx} />;
            }
          })}
          {/* <b>Total: {getTotalCartAmount().toFixed(2)}</b>
            <div>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div> 
            
            
            */}
          {GetTotalCartAmount().toFixed(2) === 0.0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <b>TOTAL: ${GetTotalCartAmount().toFixed(2)}</b>
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
      </div>
    </>
  );
};

export default CartOffCanvas;
