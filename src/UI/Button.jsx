import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Button = (props) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      type={props.type}
      onClick={props.onClick}
      className="button--1"
      style={{ color: props.color }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
