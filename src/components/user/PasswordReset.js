import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const PasswordReset = () => {
    
    let [passwordObj,setPasswordObj] = useState({
        email:sessionStorage.getItem('custEmail'),
        password:'',
        newPassword:'',
        confirmNewPassword:''
    })
    let [passwordMatchMsg,setPasswordMatchMsg] = useState('')
    let [oldPasswordMatchMsg,setOldPasswordMatchMsg] = useState('')
    let [successState,setSuccessState]=useState(false)
    let changeHandler=(e)=>{
        setPasswordObj({...passwordObj,[e.target.name]:e.target.value});
    }
    let submitHandler= async(e)=>{
        e.preventDefault()
        console.log(passwordObj)
        if (passwordObj.newPassword!==passwordObj.confirmNewPassword){
            setPasswordMatchMsg('Passwords are not matched')
            setOldPasswordMatchMsg('')
        }
        else {
            try{
                let resp = await axios.post('http://localhost:3002/login',{...passwordObj})
                let user = resp.data
                if (user==='Authentication Failed'){
                    setOldPasswordMatchMsg('Old password provided is not correct')
                    setPasswordMatchMsg('')
                    console.log(resp.data)
                }
                else{
                    let resp = await axios.put('http://localhost:3002/changePassword',{...passwordObj})
                    setSuccessState(true)
                    console.log(resp.data)
                    
                }
            }
            catch(error){
                console.log(error)
            }   
       
    }}
    return ( 
        (successState)?
            <div className="h-75 m-5">
            <h3 className="text-success mb-4">Password reset successfuly!</h3>
            <button className="btn btn-warning"><Link to='/profile' className="text-dark fw-semibold fs-5 text-decoration-none">Back to profile</Link></button>
            </div> :
       <>
       <div >
        <form className="my-5 d-flex flex-column justify-content-center align-items-center">
        <div className="col-12 col-md-6  fw-semibold border p-5">
        <h3 className="text-center">Set New Password</h3>
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">Old Password</label>
              <input  onChange={(e)=>changeHandler(e)} type="password" className="form-control" name="password" />
              <small  className="form-text text-danger ms-1">{oldPasswordMatchMsg}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input  onChange={(e)=>changeHandler(e)} type="password" className="form-control" name="newPassword"/>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
              <input  onChange={(e)=>changeHandler(e)}  type="password" className="form-control" name="confirmNewPassword" id=""/>
              <small  className="form-text text-danger ms-1">{passwordMatchMsg}</small>
            </div>
             <button onClick={submitHandler}  type="submit" className="btn btn-warning mt-2 w-100 fw-semibold"
              disabled={!(passwordObj.confirmNewPassword)||!(passwordObj.password)||!(passwordObj.newPassword)}>
         Change my password
       </button>
            </div>
           
        </form>
       </div>
       </>
        );
}
 
export default PasswordReset;