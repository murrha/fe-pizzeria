const Signup = () => {
    return (
      <>
      <h1 className="text-center my-5">Create Your Account</h1>
      <form className="w-100 my-3 d-flex flex-column justify-content-center align-items-center">
       <div className="w-50">
        <div className="">
          <div class="mb-3">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              id="firstName"
              aria-describedby="firstNameHelp"
              required
            />
          </div>
          <div class="mb-3 ">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              id="lastName"
              aria-describedby="lastNameHelp"
              required
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="phoneNumber" class="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            name="phoneNumber"
            id="phoneNumber"
            aria-describedby="phoneNumberHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="signupEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="signupEmail"
            aria-describedby="emailHelp"
           
            required
          />
        </div>
        <div class="mb-3">
          <label for="signupPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="signupPassword"
          
            required
          />
        </div>
        
        <button type="submit" class="btn btn-warning mt-2 w-100 fw-semibold">
          Sign Up
        </button>
      </div>
      </form>
      </>
    );
  };
  
  export default Signup;
  