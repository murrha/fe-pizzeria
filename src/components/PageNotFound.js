import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div className="container-fluid">
        <div className="text-center">
        <img src="/img/404/404.png" width="500" alt="404"/>  
        </div>

        <div className="text-center">
          <h1>Oops! The page you are looking for could not be found.</h1>
          <h1>
            Try going to our{" "}
            <Link className="homepage-link" to="/">
              homepage
            </Link>
            
          </h1>
        </div>
      </div>
    );
  };
  
  export default PageNotFound;