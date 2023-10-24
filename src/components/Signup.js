import axios from "axios";
import { useState } from "react";




const Signup = () => {


 let [signUpObj,setSignupObj] = useState({firstName:'',lastName:'',phoneNumber:'', email:'',password:''});
 let [signUpStatus,setSignUpStatus] = useState(false);
 let [dupeUserMsg,setDupUserMsg] = useState('');
  


 let changeHandler = (e) => {
   setSignupObj({...signUpObj,[e.target.name]:e.target.value});
          
}


let clickHandler = async (e) =>{
 e.preventDefault();
 console.log(signUpObj);
 try{
 let resp = await axios.post('http://localhost:3002/signup',{...signUpObj});
 console.log("response status is "+resp.status);
 let data = await resp.data;
 console.log(data);


 if(data) {
   setSignUpStatus(true);
}
else{
   setDupUserMsg(" Sorry, a user with that email is already registered");
 };
  }


 catch(error) {
      setDupUserMsg(" Sorry, a user with that email is already registered");
     console.log('could not signup/store-user');
     console.log(error);


        }
}




if( !signUpStatus) {
   return (
     <>
    
     <h1 className="text-center my-5">Create Your Account</h1>
     <form className="w-100 my-3 d-flex flex-column justify-content-center align-items-center">
      <div className="w-50">
       <div className="">
         <div class="mb-3">
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
             required
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
             required
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
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="signupEmail1" className="form-label">
           Email address
         </label>
         <input
           type="email"
           className="form-control"
           name="email"
           onChange={(e)=>changeHandler(e)}
           id="signupEmail"
           aria-describedby="emailHelp"
         
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="signupPassword" className="form-label">
           Password
         </label>
         <input
           type="password"
           className="form-control"
           name="password"
           onChange={(e)=>changeHandler(e)}
           id="signupPassword"
           required
         />
       </div>
      
       <button type="submit"  onClick={(e) => clickHandler(e)} className="btn btn-warning mt-2 w-100 fw-semibold">
         Sign Up
       </button>
       <h2 className="px-5 py-2 text-danger "> {dupeUserMsg}  </h2>
     </div>
     </form>
     </>
   );
 }


else {
 return (<div className='row mb-4 text-success'>
               <div className="col-sm-6 offset-3">
              <p className="text-center display-4">  Congratulations  {signUpObj.firstName} {signUpObj.lastName}!</p>
               <p className="text-center lead">You are now registered with
               Full Stack Pizzeria! </p>
               <p className="text-center lead">Go ahead and login now so you can start ordering some tasty meals!</p>
          
               </div>
           </div>);
}


}
  export default Signup;
  