const Contact = () => {
    return ( 
        <div className="container mt-5">

  <h2 className="text-center "> Contact Us</h2>
  
  <div className="row">

    <div className="col-md-4">

      <img src="img/contact/getintouch.png" height="200px" alt="pizza"/>

    </div>

    <div className="col-md-8">
      <form>
        <div className="">
          <label>Name</label>
          <input className="form-control" />  
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>

        <button className="btn btn-success fw-bold btn-warning text-dark mt-3">Submit</button>
       
      </form>

      <div className="mt-5 fst-italic ">
        <p>
        Please fill out the form and we'll get back to you as soon as possible.
        </p>

        </div>
    </div>

  </div>

</div>



     );
}
 
export default Contact;