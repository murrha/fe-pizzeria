import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DataContext } from "./data-context";
// import foodData from "../products.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const inLocalStorage = JSON.parse(window.localStorage.getItem("CART_ITEMS"));

  let cart;

  if (inLocalStorage !== null) {
    cart = JSON.parse(window.localStorage.getItem("CART_ITEMS"));
  } else {
    cart = {};
    let endOfList = 41;

    for (let i = 0; i < endOfList + 1; i++) {
      cart[i] = 0;
    }
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const fetchAllMenu = async () => {
    let data;
    let resp = await axios.get("http://localhost:3002/menu");
    await console.log("resp: ", resp);
    data = await resp.data;
    await console.log(">>> START data: ", data);
    await window.localStorage.setItem("MENU_DATA", JSON.stringify(data));
  };
  const getAllMenu = async () => {
    if ((await JSON.parse(window.localStorage.getItem("MENU_DATA"))) == null) {
      await fetchAllMenu();
    }
    let data = JSON.parse(window.localStorage.getItem("MENU_DATA"));
    return data;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  let [foodData, setFoodData] = useState();
  if (cartItems !== null || cartItems !== undefined) {
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  }

  useEffect(() => {
    const data = window.localStorage.getItem("CART_ITEMS");
    console.log("cart items data: ", data);
    setCartItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (cartItems === null) {
      setCartItems(getDefaultCart());
    }
  }, [cartItems]);

  useEffect(() => {
    const getAllProducts = async () => {
      // let resp =  await fetch('./json/products.json');
      // let data = await resp.json();
      let data;
      do {
        let resp = await axios.get("http://localhost:3002/menu");
        data = await resp.data;
      } while (data === null || data === undefined);
      console.log("data inside useEffect shop-context: ", data);
      window.localStorage.setItem("MENU_DATA", JSON.stringify(data));
      console.log("backend fetch data: ", data);
      setFoodData(data);
    };
    getAllProducts();
  }, [foodData]);

  useEffect(() => {
    // console.log("useEffect cartItems: ", cartItems);
    if (cartItems === null) {
      setCartItems(getDefaultCart());
      window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    } else {
      window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const getCartCount = () => {
    let cartCount = 0;
    for (const item in cartItems) {
      cartCount = cartCount + cartItems[item];
    }
    // console.log("cartCount: ", cartCount);
    return cartCount;
  };

  const getCartItemCount = (index) => {
    // let cartCount = 0;
    // for (const item in cartItems) {
    //   cartCount = cartCount + cartItems[item];
    // }
    let cartItemCount = cartItems[index];

    // console.log("cartItems in getCartItemCount : ", typeof cartItems[2]);
    // console.log("cartItemCount: ", cartItemCount);
    return cartItemCount;
  };

  const GetTotalCartAmount = () => {
    const { foodData } = useContext(DataContext);

    let totalAmount = 0;
    console.log("foodData in GetTotalCartAmount (new): ", foodData);
    let foodDataList = foodData;
    // if (foodData === null || foodData === undefined) {
    //   foodDataList = JSON.parse(window.localStorage.getItem("MENU_DATA"));
    // } else {
    //   foodDataList = foodData;
    // }
    console.log("foodData inside getTotalCartAmount >>: ", foodData);
    // console.log("cartItems in getTotalCartAmount: ", cartItems);
    // console.log("foodListData: ", foodListData);
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // console.log("item: ", typeof item);
        // while (foodDataList == undefined) {
        //   console.log("Loading...");
        // }
        let itemInfo = foodDataList.find(
          (product) => product.id === parseInt(item)
        );
        // console.log("itemInfo: ", itemInfo);
        // console.log("itemInfo.price: ", itemInfo.price);
        // console.log(parseFloat(itemInfo.price.replace("US$", "")));
        // console.log("cartItems[item]: ", cartItems[item]);
        console.log("parseInt(item): ", parseInt(item));
        console.log(
          "parseFloat(itemInfo.price.replace('US$', '')): ",
          parseFloat(itemInfo.price.replace("US$", ""))
        );
        let itemPrice =
          parseFloat(itemInfo.price.replace("US$", "")) * cartItems[item];
        // console.log("itemPrice: ", itemPrice);
        totalAmount = totalAmount + itemPrice;
        // console.log("itemInfo.price: ", itemInfo.price);
        // console.log(">>>cartItems[item]: ", cartItems[item]);
        // let itemPrice =
        //   parseInt(itemInfo.price.replace("US$", "")) * cartItems[item];
        // console.log("itemPrice: ", itemPrice);
        // console.log("totalAmount: ", totalAmount);
      }
    }
    // console.log("totalAmount: ", totalAmount);
    return totalAmount;
  };

  const addToCart = (itemId) => {
    // console.log("cartItems: ", cartItems);

    console.log("add to cart itemId: ", itemId);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[parseInt(itemId)] + 1 }));
    toast.success("Added item to cart", { position: "bottom-left" });
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    // console.log("cartItems: ", cartItems);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    GetTotalCartAmount,
    getCartCount,
    getCartItemCount,
    checkout,
    foodData,
    fetchAllMenu,
    getAllMenu,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
