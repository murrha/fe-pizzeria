import axios from "axios";

export const fetchAllMenu = async () => {
  let data;
  let resp = await axios.get("http://localhost:3002/menu");
  await console.log("resp: ", resp);
  data = await resp.data;
  await console.log(">>> START data: ", data);
  await window.localStorage.setItem("MENU_DATA", JSON.stringify(data));
};

export const getAllMenu = async () => {
  await console.log(
    "JSON.parse(window.localStorage.getItem('MENU_DATA')) == null: ",
    JSON.parse(window.localStorage.getItem("MENU_DATA")) == null
  );
  if (JSON.parse(window.localStorage.getItem("MENU_DATA")) == null) {
    await fetchAllMenu();
  }
};
// data = JSON.parse(window.localStorage.getItem("MENU_DATA"));
