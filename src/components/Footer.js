import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        
        <footer className="py-3 my-4 border-top ">
       <div className="container">
       <div className="row">
       <div className="col-sm-3">
      <Link className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://www.facebook.com/" target="_blank">
       <i className="bi bi-facebook" ></i>
      </Link>
      
        <Link className=" p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://twitter.com/home?lang=en/" target="_blank">
         <i className="bi bi-twitter" ></i></Link>
         
        <Link className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://www.instagram.com/" target="_blank">
          <i className="bi bi-instagram " ></i>
         </Link>
         
         <Link className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://www.tiktok.com/en/" target="_blank">
          <i className="bi bi-tiktok" ></i>
         </Link>
         <Link className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://web.wechat.com/?lang=en/" target="_blank">
          <i className="bi bi-wechat"  ></i>
         </Link>
      
      
         <Link className="p-2 icon-link link-dark link-underline-success link-underline-opacity-25" to="https://www.youtube.com/" target="_blank">
          <i className="bi bi-youtube " ></i>
         </Link>
    </div>
  
    <div className="col-sm-6">
    <ul className="nav mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary"><b>Home</b></Link></li>
      <li className="nav-item"><Link to="/menu" className="nav-link px-2 text-body-secondary"><b>Menu</b></Link></li>
      <li className="nav-item"><Link to="location" className="nav-link px-2 text-body-secondary"><b>Location</b></Link></li>
      <li className="nav-item"><Link to="about" className="nav-link px-2 text-body-secondary"><b>About</b></Link></li>
      <li className="nav-item"><Link to="faq" className="nav-link px-2 text-body-secondary"><b>FAQs</b></Link></li>
      <li className="nav-item"><Link to="contact" className="nav-link px-2 text-body-secondary"><b>Contact</b></Link></li>
      <li className="nav-item"><Link to="soon" className="nav-link px-2 text-body-secondary"><b>Rewards</b></Link></li>
      <li className="nav-item"><Link to="terms" className="nav-link px-2 text-body-secondary"><b>Terms</b></Link></li>
      
    </ul>
    </div>

    <div className="col-sm-3 ">
    <Link to="/">
      <img src="/logo.png" className="me-auto logo" width="150px" alt="logo"/>
    </Link>
    </div>
</div>
   
    
    <div className="row">
    <p className="text-center text-body-secondary">© 2023 Full Stack Pizzeria</p>
    </div>

    </div> 
  </footer>
    );
}
 
export default Footer;