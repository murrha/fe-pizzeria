// import { useParams } from "react-router-dom";

import { useState } from "react";

const ProductDetails = (props) => {

    let[count, setCount] = useState(1); 

    console.log(props.productInfo); 
    
    //UseParams
    // let paramsObj = useParams(); 
    // console.log("useParams " + paramsObj.id);
    

    //loading screen
    if(!props.productInfo){
        return <h2>Loading...</h2>
    }

    let increaseHandler = () => {
        count++; 
        setCount(count); 
    }

    let decreaseHandler = () => {
        count--; 
        setCount(count);
    }

    return ( <>
    <div className="card mx-auto w-75">
        <div className="row">
            <div className="col-md-4">
                <img className="card-img-top" src={`${props.productInfo.image}`} alt={`${props.productInfo.name}`}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{props.productInfo.name}</h4>
                    <h5>{props.productInfo.price}</h5>
                    <p className="card-text">{props.productInfo.description}</p>
                    <button className="btn btn-success" onClick={decreaseHandler}>-</button>
                    <span>{count}</span>
                    <button className="btn btn-success" onClick={increaseHandler}>+</button>
                    <button className="btn btn-success">Add to Cart</button>
               </div>
            </div>
        </div>
   
</div>
    </> );
}
 
export default ProductDetails;

