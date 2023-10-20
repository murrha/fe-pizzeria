import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="loginModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="loginEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="loginEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="loginPassword"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-warning w-100 mt-2 rounded-pill fw-semibold"
                >
                  Sign In
                </button>
              </form>
              <div className="my-3 d-flex justify-content-center">
              <span className="me-1">Not Registered? </span>
              <Link to='/signup' className="text-dark" onClick="$('#loginModal').modal('hide')">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
