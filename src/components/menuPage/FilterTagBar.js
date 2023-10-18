

const FilterTagBar = () => {
let activeHandler=(e)=>{
    let activeList = document.getElementsByClassName('active')
    if(activeList.length!==0){
        (activeList)[0].classList.remove('active');
    }
        e.currentTarget.className += ' active'
}


  return (
    <div id='scrollTag' className="scrollTag sticky-top bg-white fw-semibold fs-5 d-flex justify-content-lg-center">
      
      <a className="scrollItem" href="#pizzas" onClick={activeHandler}>
        PIZZAS
      </a>
      <a className="scrollItem" onClick={activeHandler} href="#salads">SALADS</a>
      <a className="scrollItem" onClick={activeHandler} href="#pastas">PASTAS</a>
      <a className="scrollItem" onClick={activeHandler}  href="#starters">STARTERS</a>
      <a className="scrollItem" onClick={activeHandler}  href="#desserts">DESSERTS</a>
      <a className="scrollItem" onClick={activeHandler}  href="#take-out">TAKE-OUT</a>
      
               
      </div>
  );
};

export default FilterTagBar;
