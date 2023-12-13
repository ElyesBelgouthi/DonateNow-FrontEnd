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
      delay: 0.5,
      duration: 0.55,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const firstChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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

        <motion.p className="home--description" variants={firstChildVariants}>
          By contributing to reputable organizations or initiatives that provide
          aid, medical supplies, and support to those in need, you can help
          bring hope and assistance to the people of Palestine who have endured
          longstanding hardships.
        </motion.p>
        <motion.div variants={firstChildVariants}>
          <Button type="button" className="button--1">
            Donate
          </Button>
        </motion.div>
      </div>
      <div className="image--content">
        <Flag />
      </div>
    </motion.div>
  );
};

export default HomePage;
