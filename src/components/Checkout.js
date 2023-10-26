const Checkout = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>CHECKOUT</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Type</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="delivery"
                    name="delivery"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  ></input>
                  <label class="custom-control-label" for="credit">
                    Delivery
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="carryOut"
                    name="carryOut"
                    type="radio"
                    class="custom-control-input"
                    required
                  ></input>
                  <label class="custom-control-label" for="debit">
                    Carry out
                  </label>
                </div>
              </div>
              <h4 class="mb-3">Delivery address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="mb-3">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address2">
                      Address 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    ></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select
                      class="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>

                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>Delaware</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      <option>Hawaii</option>
                      <option>Idaho </option>
                      <option>Illinois</option>
                      <option>Indiana</option>
                      <option>Iowa</option>
                      <option>Kansas</option>
                      <option>Kentucky</option>
                      <option>Louisiana</option>
                      <option>Maine</option>
                      <option>Maryland</option>
                      <option>Massachusetts</option>
                      <option>Michigan</option>
                      <option>Minnesota</option>
                      <option>Mississippi</option>
                      <option>Missouri</option>
                      <option>Montana</option>
                      <option>Nebraska</option>
                      <option>Nevada</option>
                      <option>New Hampshire</option>
                      <option>New Jersey</option>
                      <option>New Mexico</option>
                      <option>New York</option>
                      <option>North Carolina</option>
                      <option>North Dakota</option>
                      <option>Ohio</option>
                      <option>Oklahoma</option>
                      <option>Oregon</option>
                      <option>Pennsylvania</option>
                      <option>Rhode Island</option>
                      <option>South Carolina</option>
                      <option>South Dakota</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Utah</option>
                      <option>Vermont</option>
                      <option>Virginia</option>
                      <option>Washington</option>
                      <option>West Virginia</option>
                      <option>Wisconsin</option>
                      <option>Wyoming</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    ></input>
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr class="mb-4" />
              </form>
            </div>
          </div>
          <div className="col">
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">My Order</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Contact Information</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  ></input>
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Phone number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="(555) 555 - 5555"
                    required
                  ></input>
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <hr class="mb-4" />
              </form>
            </div>
          </div>
          <div className="col">
            2 of 2
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">My Order</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
