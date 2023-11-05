import ListFormat from "./ListFormat";

const ProductList = (props) => {
  const { foodList } = props;
  console.log("props in ProductList.js: ", props);
  console.log("foodList in ProductList.js: ", foodList);

  // let foodData = JSON.parse(window.localStorage.getItem("MENU_DATA"));

  const tagArr = Array.from(new Set(foodList.map((food) => food.tag)));

  // console.log("foodData in productlist.js: ", foodData);

  // for (const key in props.foodList) {
  //   console.log(">>>: ", key, props.foodList[key]);
  // }

  console.log("tagArr: ", tagArr);

  return <ListFormat tagArr={tagArr} foodList={props.foodList} />;
};

export default ProductList;
