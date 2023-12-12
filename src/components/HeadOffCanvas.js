import { Link,useNavigate } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
const HeadOffCanvas = () => {
  let navigate = useNavigate()
  const[loginShow,setLoginShow]=useState(false)
  let logoutHandler=()=>{
    sessionStorage.removeItem('profile')
    navigate('/')
  }

    return ( 
      <>
     
        <div className="offcanvas offcanvas-start fw-semibold" tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
          <div className="offcanvas-header py-4">
            <button type="button" className="btn-close offcanvas-title" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body p-0 mt-3">
          {(sessionStorage.getItem('profile'))?
          <h3 className=" ms-3" >Welcome,{' '}
           {JSON.parse(sessionStorage.getItem('profile')).firstName[0].toUpperCase().concat(JSON.parse(sessionStorage.getItem('profile')).firstName.slice(1).toLowerCase())}</h3>:''}
            <ul className="navbar-nav justify-content-start flex-grow-1" data-bs-dismiss="offcanvas">
              <li className="nav-item">
              <Link to='/' className="p-3 border-bottom nav-link " style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-house-door-fill me-2"></i>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/menu' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-list me-2"></i>Menu</Link>
              </li>
              {(sessionStorage.getItem('profile'))?
               <li className="nav-item">
               <Link to='/orderhistory' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
               <i class="bi bi-card-list me-2"></i>Order History</Link>
               </li>:''
              }
              <li className="nav-item">
              <Link to='/location' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-geo-alt-fill me-2"></i>Location</Link>
              </li>
              <li className="nav-item">
              <Link to='/about' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-three-dots me-2"></i>About</Link>
              </li>
              <li className="nav-item">
              <Link to='/faq' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-chat-left-dots me-2"></i>FAQ</Link>
              </li>
              <li className="nav-item">
              <Link to='/contact' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-person-lines-fill me-2"></i>Contact</Link>
              </li>
            
              {(sessionStorage.getItem('profile'))?
              <>
               <li className="nav-item">
              <Link to='/profile' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i class="bi bi-person-circle me-2"></i>Profile</Link>
              </li>
              <li className="nav-item p-3 border-bottom"  >
              <span className="text-reset signInSideMenu " onClick={logoutHandler} >
                Sign Out
                </span>
              </li>
              </>
              :
              <li className="nav-item p-3 border-bottom" data-bs-dismiss="offcanvas"  >
              <span className="text-reset signInSideMenu" onClick={()=>setLoginShow(true)}><i className="bi bi-person-fill me-1"></i>
                Sign Up or Sign In
                </span>
              </li>}
            </ul>
          </div>
         
        </div>
        
        <Login show={loginShow} setLoginShow={setLoginShow}/>   
        </>
     );
}
 
export default HeadOffCanvas;