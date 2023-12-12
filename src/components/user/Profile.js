import axios from "axios";
import {useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
   
    let [profileObj,setProfileObj] = useState(
       ()=> JSON.parse(sessionStorage.getItem('profile'))||{})
   
    let [spin,setSpin]=useState(false)
 let changeHandler = (e) => {
    setProfileObj({...profileObj,[e.target.name]:e.target.value});
           
 }
 let submitHandler=async(e)=>{
    e.preventDefault()
    try{
        let resp = await axios.put("http://localhost:3002/updateProfile",{...profileObj})
        console.log(JSON.parse(resp.config.data))
        sessionStorage.setItem('profile',resp.config.data)
        setSpin(true)
        setTimeout(() => {
          setSpin(false)
        },500);
      
    }
    catch(error){
        console.log(error)
    }
 }

    return ( 
        <>
        <div>
        <form className="w-100 my-3 d-flex flex-column justify-content-center align-items-center">
      <div className="col-12 col-md-6  fw-semibold border p-5">
        <div className="mb-4 mt d-flex align-items-center justify-content-between">
            <h3>Edit Profile</h3>
            <p><Link to='/password-reset' className="text-decoration-none text-danger">Change Password</Link></p>
        </div>
        <div className="mb-3">
         <label htmlFor="email1" className="form-label">
           Email address
         </label>
         <input
           type="email"
           className="form-control text-secondary"
           name="email"
           id="signupEmail"
           value={profileObj.email}
           aria-describedby="emailHelp"
            readOnly
       
         />
       </div>
       <div className="">
         <div className="mb-3 ">
           <label htmlFor="firstName" className="form-label">
             First Name
           </label>
           <input
             type="text"
             className="form-control"
             name="firstName"
             onChange={(e)=>changeHandler(e)}
             id="firstName"
             aria-describedby="firstNameHelp"
             defaultValue={profileObj.firstName}
            
           />
         </div>
         <div className="mb-3 ">
           <label htmlFor="lastName" className="form-label">
             Last Name
           </label>
           <input
             type="text"
             className="form-control"
             name="lastName"
             onChange={(e)=>changeHandler(e)}
             id="lastName"
             aria-describedby="lastNameHelp"
             defaultValue={profileObj.lastName}
        
           />
         </div>
       </div>
       <div className="mb-3">
         <label htmlFor="phoneNumber" className="form-label">
           Phone Number
         </label>
         <input
           type="tel"
           className="form-control"
           name="phoneNumber"
           onChange={(e)=>changeHandler(e)}
           id="phoneNumber"
           aria-describedby="phoneNumberHelp"
           defaultValue={profileObj.phoneNumber}
           
         />
       </div>
       
      
       <button onClick={submitHandler}  type="submit" className="btn btn-warning mt-2 w-100 fw-semibold" 
        disabled={!(profileObj.firstName)||!(profileObj.lastName)||!(profileObj.phoneNumber)
       }>
         {spin?<div className="spinner-border spinner-border-sm text-light me-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>:''}
         Save
       </button>
     
     </div>
     </form>
        </div>
        
        </>
     );
}
 
export default Profile;