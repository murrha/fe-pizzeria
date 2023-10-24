import { useState } from "react";

const Delivery = () => {

    const[zipCode, setZipCode] = useState('');
    const[isValidZip, setIsValidZip] = useState(null);

    const handleZipChange = (e) =>{
        const enteredZip = e.target.value
        setZipCode(enteredZip);

        if(!enteredZip){
            setIsValidZip(null);
        }
    }
        
        const handleSearch=()=>{
        const deliveryZips = ['95121', '94025', '94040', '94041', '94043', '94085','94086','94087','94089'
        ,'94301','94303', '94306','94536','94538','94539','94541', '94542','94544','94545','94550','94552'
        ,'94555','94560','94566','94568','94586','94587', '94588', '95002','95035','95050','95051','95053'
        ,'95054','95110','95112','95113','95116','95117','95122','95126','95127','95128','95131','95132','95133','95134']

        const isValid = deliveryZips.includes(zipCode);

        setIsValidZip(isValid);
    }
    
    return (

        <div>
        <h3>Enter zip code to see if we deliver to your area.</h3>
            <input
            className=""
            type="text"
            placeholder="Enter zip code"
            value={zipCode}
            onChange={handleZipChange}
            />

       
            <button className="btn btn-warning mx-2" onClick={handleSearch}>
                    Search
            </button>
   
            
            {zipCode && isValidZip !== null &&(
                <>
            {isValidZip? (
                <h4 className="text-success">We deliver to your area!</h4>
            ):(
                <h4 className="text-danger">Sorry, we do not deliver to this location. </h4>
            )}
            </> 
            )}

        </div>

      );
}
 
export default Delivery;









