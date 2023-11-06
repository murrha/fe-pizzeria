import ListFormat from "./ListFormat";

const ProductList = (props) => {
  const { foodList } = props;
  console.log("props in ProductList.js: ", props);
  console.log("foodList in ProductList.js: ", foodList);

  const tagArr = Array.from(new Set(foodList.map((food) => food.tag)));

  console.log("tagArr: ", tagArr);

  return <ListFormat tagArr={tagArr} foodList={props.foodList} />;
};

export default ProductList;
