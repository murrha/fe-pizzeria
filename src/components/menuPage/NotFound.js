import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate=useNavigate()
    let clickHandler=()=>{
        navigate("/menu")
    }
    return ( 
        <div className="mx-3 mt-4">
        <h1>Item Not Found!</h1>
        <button className="btn btn-warning mt-3 fw-semibold" onClick={clickHandler}>Menu Listings</button>
        </div>
     );
}
 
export default NotFound;