import { Form, Link, json, useActionData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../UI/Button";
import { API_BASE_URL } from "../Context";
import { useEffect } from "react";
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

const SignUpPage = () => {
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.accessToken) {
      navigate(-1);
    }
  }, [actionData]);

  return (
    <motion.div
      className="signup-content"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      <h2>Create an Account</h2>
      <div className="signup-form">
        <Form method="post">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="password"
              className="form-control"
              id="fullName"
              placeholder="Full name"
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="connection--btn--container">
            <Button>Sign Up</Button>
          </div>
        </Form>
        <div className="connection--change--method">
          Already have an account?
          <motion.p whileHover={{ scale: 1.2 }}>
            <Link to="/auth/login">Clink here</Link>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpPage;

export async function signUpAction({ request }) {
  const data = await request.formData();
  const authData = {
    userName: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(API_BASE_URL + "Auth/Register?role=user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (!response.ok) {
    throw json({ message: "Email Used Before" });
  }
  const resData = response;

  localStorage.setItem("accessToken", resData.accessToken);
  return response;
}
