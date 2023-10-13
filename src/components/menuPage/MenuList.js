import { useState,useEffect} from 'react';

import ProductList from './ProductList';
import SearchBar from './SearchBar';
import FilterTagBar from './FilterTagBar';



const MenuList = () => {
    let [foodData,setFoodData] = useState()

    useEffect(() => {
        const getAllProducts = async ()=>{
        let resp =  await fetch('./json/products.json');
        let data = await resp.json();
        setFoodData(data);    
        };
        getAllProducts();
    },[]);
    return ( 
       <>
       {foodData && <SearchBar foodList={foodData} disabled={false} readOnly={false}/>} 
       {<FilterTagBar/>}
      {foodData && <ProductList foodList={foodData}/>} 
       </>
     );
}

 
export default MenuList;