import { Link } from "react-router-dom";

import CartOffCanvas from "./CartOffCanvas";

const Header = () => {

    return ( <>
        <div className="row border-bottom mx-0 mb-3  pt-3 pb-2 fs-5 sticky-top bg-white">
            <div className="col-6 d-flex align-items-center">
            <Link to='/' className="mx-2">
                <img src="./logo.jpg" alt='logo' width='130px'></img>
            </Link>
            <Link to='/' className=" mx-3 nav-link fw-bold navbar-link">Home</Link>
            <Link to='/' className="mx-3 nav-link fw-bold navbar-link"  style={{color:"rgb(25, 25, 25)"}}>Menu</Link>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
            <button className="btn btn-danger rounded-pill fw-bold position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="cart">
            <i className="bi bi-cart-fill me-1"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                     0
                <span className="visually-hidden">cart's items amount</span>
            </span>
            </button>
            <button type="button"  className="btn fw-bold rounded-pill border-0 mx-1 nav-button" >
            <i className="bi bi-person-fill me-1"></i>
                Sign In
            </button>
            <button  style={{color:"rgb(25, 25, 25)",backgroundColor:"rgb(214,214,214)"}} type="button" className="btn  btn-sm fw-bold rounded-pill border-0 nav-button"  >
                Sign Up
            </button>
            </div>
            <CartOffCanvas/>
            
        </div>
        
               
           
        </>
     );
}
 
export default Header;