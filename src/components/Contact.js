const Contact = () => {
    return ( 
        <div className="container mt-5">

  <h2 className="text-center "> Contact Us</h2>
  
  <div className="row">

    <div className="col-md-5">

      <img src="img/contact/getintouch.png" height="200px" alt="pizza"/>
      <h4>Business Phone Number</h4>
      <h5><i>510-123-1234</i></h5>

    </div>


    <div className="col-md-7">

      <form action="https://formsubmit.co/danachen789@gmail.com" method="POST">
      <input type="hidden" name="_captcha" value="false"/>

   
          <label>Name</label>
          <input type="name" name="name" className="form-control" placeholder="Your Name" required/>  
 

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea type="text" name="text" className="form-control" placeholder="Write your message here" required></textarea>
        </div>

        <button className="btn btn-success fw-bold btn-warning text-dark mt-3" type="submit">Submit</button>

        <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
       
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