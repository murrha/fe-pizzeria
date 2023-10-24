import Delivery from "./Delivery";

const Location = () => {
  return (
    <>
    <div className="container mt-5">
    <div className="row">

      <div className="col-md-6">

          <div className="mb-3">
          <h1>Our Location</h1>
          <p>We are located at <u>123 Main Street, San Jose, CA 95131.</u></p>
  
          <span><b>Opening Hours:</b></span> <span>Monday to Sunday: 11am - 11pm</span>
         
          </div>
          <iframe title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50721.08080255814!2d-121.94443583138822!3d37.38823475103507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbff355b2f4f%3A0x7fcf3351d3ac37ff!2sSan%20Jose%2C%20CA%2095131!5e0!3m2!1sen!2sus!4v1697825665058!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

          </iframe>
       
   
        </div>

        <div className="col-md-6">
        <Delivery/>
        </div>

        </div>
</div>

    </>
  );
};

export default Location;


