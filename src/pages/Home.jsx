import { motion } from "framer-motion";

import Button from "../UI/Button";
import Flag from "../UI/Flag";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.55,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const HomePage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="main--section"
    >
      <div className="text--content">
        <div className="home--title">
          <h1>
            <span>SAVE</span>
            <span>PALESTINE</span>
          </h1>
        </div>

        <p className="home--description">
          By contributing to reputable organizations or initiatives that provide
          aid, medical supplies, and support to those in need, you can help
          bring hope and assistance to the people of Palestine who have endured
          longstanding hardships.
        </p>
        <Button type="button" className="button--1">
          Donate
        </Button>
      </div>
      <div className="image--content">
        <Flag />
      </div>
    </motion.div>
  );
};

export default HomePage;
