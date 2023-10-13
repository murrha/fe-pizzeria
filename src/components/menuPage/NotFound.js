import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate=useNavigate()
    let clickHandler=()=>{
        navigate("/menu")
    }
    return ( 
        <div className="mx-3 mt-4">
        <h1>Item Not Found!</h1>
        <button className="btn btn-primary mt-3" onClick={clickHandler}>Return to Main Menu</button>
        </div>
     );
}
 
export default NotFound;