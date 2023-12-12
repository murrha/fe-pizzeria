import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
const Login = (props) => {
  let navigate = useNavigate()
  let [invalidMsg,setInvalidMsg]=useState()
  let {show,setLoginShow} = props
  const [loginObj,setLoginObj]=useState({email:'',password:''})
  let changeHandler=(e)=>{
    setLoginObj({...loginObj,[e.target.name]:e.target.value})
  }
  let submitHandler=async(e)=>{
    e.preventDefault()
    console.log(loginObj)
    try{
      let resp = await axios.post("http://localhost:3002/login",{...loginObj})
      console.log(resp.data)
      let user = resp.data
      if(user!=='Authentication Failed'){
        
        sessionStorage.setItem('custEmail',user.email)
        sessionStorage.setItem('profile',JSON.stringify(user))
        
        navigate('/menu')
        setLoginShow(false)
        setInvalidMsg('')
      }else{
        setInvalidMsg('Invalid email/password')
      }
    }
    catch(error){
      console.log(error)
      console.log('Failed to login')
    }
   
  }
  
 
  return (
    <>
    <Modal show={show} onHide={()=>setLoginShow(false)} centered>
      <ModalHeader closeButton className="fw-semibold fs-5">
        Sign in
      </ModalHeader>
      <ModalBody>
      <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    onChange={changeHandler}
                    type="email"
                    className="form-control"
                    name='email'
                    id="loginEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={changeHandler}
                    type="password"
                    className="form-control"
                    name='password'
                    id="loginPassword"
                    placeholder="Password"
                   
                  />
                </div>
                
                <small id="emailHelp" className="form-text text-danger ms-1">{invalidMsg}</small>
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="btn btn-warning w-100 mt-2 rounded-pill fw-semibold"
                >
                  Sign In
                </button>
              </form>
              <div className="my-3 d-flex justify-content-center">
              <span className="me-1">Not Registered? </span>
              <Link to='/signup' className="text-dark" onClick={()=>setLoginShow(false)} >Create an account</Link>
              </div>
      </ModalBody>
    </Modal>
    
    
    </>
  );
};

export default Login;
