import { Link } from "react-router-dom";
import HeadOffCanvas from "./HeadOffCanvas";
import CartOffCanvas from "./CartOffCanvas";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const MdHeader = () => {
  const { getCartCount } = useContext(ShopContext);
  return (
    <>
      <nav
        className="navbar border-bottom mt-2 mb-3 fs-5 py-2 sticky-top bg-white"
        aria-label="Light offcanvas navbar"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler px-2 ms-2 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarLight"
            aria-controls="offcanvasNavbarLight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="mx-2 ">
            <img src="/logo.jpg" alt="logo" width="130px"></img>
          </Link>
          <button
            className="btn btn-danger me-3 rounded-pill fw-bold position-relative"
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
        </div>
      </nav>
      <HeadOffCanvas />
      <CartOffCanvas />
    </>
  );
};

export default MdHeader;
