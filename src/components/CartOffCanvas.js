const CartOffCanvas = () => {
    return ( 
        <div className="offcanvas offcanvas-end z-5" tabIndex="-1" id="cart" aria-labelledby="cartLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="cartLabel">Cart</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
   
  </div>
</div>
     );
}
 
export default CartOffCanvas;