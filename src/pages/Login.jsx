import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../UI/Button";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.55,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
};

const LoginPage = () => {
  return (
    <motion.div
      className="signup-content"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      <h2>Login</h2>
      <div className="signup-form">
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
          <div className="connection--btn--container">
            <Button type="submit">Login</Button>
          </div>
        </form>
        <div className="connection--change--method">
          Create an account?
          <motion.p whileHover={{ scale: 1.2, color: "#fd0065" }}>
            <Link to="/auth/signup">Clink here</Link>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
