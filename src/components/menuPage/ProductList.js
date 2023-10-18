import ListFormat from "./ListFormat";

const ProductList = (props) => { 
   
    const tagArr = Array.from (new Set(props.foodList.map(food=>food.tag)))
   
  return (
   
   <ListFormat tagArr={tagArr} foodList={props.foodList}/>
)}

export default ProductList;
