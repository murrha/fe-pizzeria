import { useEffect} from "react";
import ProductList from "../menuPage/ProductList";
import axios from "axios";
const MenuBot = (props) => {
    let {setState} = props

    useEffect(() => {
        const getAllProducts = async ()=>{
        // let resp =  await fetch('./json/products.json');
        // let data = await resp.json();
        let resp = await axios.get('http://localhost:3002/menu')
        let data = resp.data
        setState((state)=>({...state,menu:data}))   
        };
        getAllProducts();
    },[]);
    return ( 
        <>
       {props.menu && <ProductList foodList={props.menu}/>} 
        </>
     );
}
 
export default MenuBot;