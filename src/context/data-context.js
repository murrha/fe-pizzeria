import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataContextProvider = (props) => {
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

  const contextValue = {
    fetchAllMenu,
    getAllMenu,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
