import Button from "../UI/Button";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-form">
          <h2>Create an Account</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
