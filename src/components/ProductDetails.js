import { useParams } from "react-router-dom";

const ProductDetails = () => {

    //UseParams
    ///menu/item/<id>
    let productsObj = useParams(); 

    

    return ( <>
    
    <div className="card mx-auto w-75">
        <div className="row">
            <div className="col-md-4">
                <img className="card-img-top" src="https://olo-images-live.imgix.net/19/192ef04f5f0b4108a0b039b70b82527b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=9ebfc96499020b28a2766a05edc92991" alt="Title"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">THE ORIGINAL BBQ CHICKEN PIZZA</h4>
                    <h5>$18.99 | 190 Calories (per slice)</h5>
                    <p className="card-text">Created here in 1985. Our legendary BBQ sauce, smoked Gouda, red onions, and fresh cilantro transform this original to iconic. Also available with Nueske's applewood smoked bacon or fresh pineapple.</p>
                    <button className="btn btn-success">Add to Cart</button>
               </div>
            </div>
        </div>
   
</div>
    </> );
}
 
export default ProductDetails;

