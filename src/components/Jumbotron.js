import { Link } from "react-router-dom";

const Jumbotron = () => {
    return ( <>
    <div className="container-fluid" id="jumbo">
            <div className="p-5 mb-4">
                <div className="container-fluid py-5 bg-light bg-opacity-50">
                    <h1 className="display-5 fw-bold">Whole pizza for $13.99</h1>
                    <p className="col-md-8 fs-4">Celebrate National Pizza Month by ordering any pizza dine-in!</p>
                    <Link to={`/menu`}><button className="btn btn-warning text-dark fw-bold btn-lg mt-5" type="button">Order Now</button></Link>
                </div>
              </div>
        </div>
    </> );
}
 
export default Jumbotron;