import { Form, Link, useActionData, useNavigate, json } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../UI/Button";
import { useEffect } from "react";
import { API_BASE_URL } from "../Context";

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
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.accessToken) {
      navigate(-2);
    }
  }, [actionData]);

  return (
    <motion.div
      className="signup-content"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      <h2>Login</h2>
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
            <Button>Login</Button>
          </div>
        </Form>
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

export async function loginAction({ request }) {
  const data = await request.formData();
  const authData = {
    userName: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(API_BASE_URL + "Auth/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (!response.ok) {
    return json({ message: "Wrong Credentials" }, { status: response.status });
  }
  const resData = await response.json();

  if (resData.accessToken) {
    localStorage.setItem("accessToken", resData.accessToken);
  } else {
    throw json({ message: "Access Token Missing" }, { status: 500 });
  }

  return json(resData);
}
