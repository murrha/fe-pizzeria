import { useState,useEffect } from "react";

const BackToTopButton = () => {
    const [buttonShow,setButtonShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY>100){
                setButtonShow(true)
            }
            else{
                setButtonShow(false)
            }
        })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return ( 
        buttonShow &&
        <button onClick={scrollUp} style={{
            bottom:"80px",
            float:'right',
            position:"sticky"}}
            className="btn btn-lg  me-4 btn-dark text-center rounded-circle fs-4 fw-semibold"
            >^</button>
     );
}
 
export default BackToTopButton;