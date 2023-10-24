const Signup = () => {
  return (
    <>
      <h1 className="text-center my-5">Create Your Account</h1>
      <form className="w-100 my-3 d-flex flex-column justify-content-center align-items-center">
        <div className="w-50">
          <div className="">
            <div className="mb-3">
              <label for="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                aria-describedby="firstNameHelp"
                required
              />
            </div>
            <div className="mb-3 ">
              <label for="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                aria-describedby="lastNameHelp"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              id="phoneNumber"
              aria-describedby="phoneNumberHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label for="signupEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label for="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning mt-2 w-100 fw-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
