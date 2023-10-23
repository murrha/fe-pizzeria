import { Link } from "react-router-dom";


const ThankYouContact= () => {
    return ( 
        <div className="container py-5 ">
        <div className="row text-center mb-5">
      <h1>Thank You!</h1>

      <p>We've received your message and will get back to you soon.</p>

      <p>
        In the meantime, feel free to return to the {" "}<Link className="homepage-link" to="/">homepage</Link>.
      </p>

      <p>Sincerely,</p>
      <h5>Full Stack Pizzeria Team</h5>
      </div>
    </div>

     );
}
 
export default ThankYouContact;