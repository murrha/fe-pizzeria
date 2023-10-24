import { Link } from "react-router-dom";

import CartOffCanvas from "./CartOffCanvas";
import Login from "./Login";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Header = () => {
  const { getCartCount } = useContext(ShopContext);
  return (
    <>
      <div className="row border-bottom mx-0 mb-3  pt-3 pb-2 fs-5 sticky-top bg-white">
        <div className="col-8 d-flex align-items-center justify-content-around">
          <Link to="/" className="">
            <img src="/logo.jpg" alt="logo" width="130px"></img>
          </Link>
          <Link to="/menu" className="nav-link fw-bold navbar-link">
            Menu
          </Link>
          <Link to="/location" className="nav-link fw-bold navbar-link">
            Location
          </Link>
          <Link to="/about" className=" nav-link fw-bold navbar-link">
            About
          </Link>
          <Link to="/faq" className=" nav-link fw-bold navbar-link">
            FAQ
          </Link>
          <Link to="/contact" className="nav-link fw-bold navbar-link">
            Contact
          </Link>
          
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <button
            className="btn btn-danger rounded-pill fw-bold position-relative"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#cart"
            aria-controls="cart"
          >
            <i className="bi bi-cart-fill me-1"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
              {getCartCount()}
              <span className="visually-hidden">cart's items amount</span>
            </span>
          </button>
          <button
            type="button"
            className="btn fw-bold rounded-pill border-0 mx-1 nav-button"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            <i className="bi bi-person-fill me-1"></i>
            Sign In
          </button>
          <button
            style={{
              color: "rgb(25, 25, 25)",
              backgroundColor: "rgb(214,214,214)",
            }}
            type="button"
            className="btn  btn-sm fw-bold rounded-pill border-0 nav-button"
          >
            <Link
              to="/signup"
              className="text-decoration-none"
              style={{ color: "rgb(25, 25, 25)" }}
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
      <CartOffCanvas />
      <Login />
    </>
  );
};

export default Header;
