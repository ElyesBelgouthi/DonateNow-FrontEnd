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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="signup-image">
        <img src="/path/to/your/image.jpg" alt="Signup" />
      </div>
    </div>
  );
};

export default SignUpPage;
