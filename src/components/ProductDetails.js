import { useState } from "react";

const ProductDetails = (props) => {

    let[count, setCount] = useState(1); 
    console.log(props.food); 
    
    //loading screen
    if(!props.food){
        return <h2>Loading...</h2>
    }

    return ( <>
        <div className="card mx-auto w-75 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="img-fluid rounded-start" src={`${props.food.image}`} alt={`${props.food.name}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title mt-4">{props.food.name}</h4>
                        <h5>{props.food.price}</h5>
                        <p className="card-text">{props.food.description}</p>

                        <div className="input-group mb-3 mt-3">
                            {count <= 1 ? <button className="btn btn-outline-secondary disabled px-2">-</button> : <button className="btn btn-secondary px-2" onClick={() => setCount(count -1)}>-</button>}
                            <input className="text-center col-sm-3" value={count}/>
                            <button className="btn btn-secondary px-2" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        
                        <button className="btn btn-warning">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </> );
}
 
export default ProductDetails;


