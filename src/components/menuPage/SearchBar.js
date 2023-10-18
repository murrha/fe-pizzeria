import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = (props) => {
  let navigate = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let inputHandler = (e) => {
    let searchItem = e.target.value;
    setSearchInput(searchItem);
  };
  let searchHandler = () => {
    let searchFilterArr = props.foodList.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchFilterArr.length === 0) {
      navigate("/notfound");
    } else {
      navigate(`/menu/${searchInput.replace(/\s+/g, "-")}`, {
        state: searchFilterArr,
      });
    }
    
  };
  let cancelHandler=()=>{
    navigate("/menu");
  }
  
  return (
    <>
    <form className="d-flex justify-content-lg-center">
      <div className="input-group mx-3 my-2 my-lg-3">
        <button
          type="submit"
          className="input-group-text btn btn-danger"
          onClick={searchHandler}
          id="basic-addon1"
          disabled={props.disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
        <input
          type="text"
          className="form-control searchInput border-secondary-light rounded-end-2"
          value={props.value}
          onChange={inputHandler}
          placeholder="Search in Menu"
          aria-label="search"
          aria-describedby="basic-addon1" readOnly={props.readOnly}
          required
        />
         <button className="btn p-0 cancelBtn" onClick={cancelHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
      </button>
      </div>
      </form>
     
    </>
  );
};

export default SearchBar;
