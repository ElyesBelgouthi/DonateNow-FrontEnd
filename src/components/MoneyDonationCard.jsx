import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 0.4,
    },
  },
};

const firstChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const MoneyDonationCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const progress = "45%";
  const progressBarVariants = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: progress,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="money-donation-card"
      variants={cardVariants}
      initial="hidden"
      animate={mainControls}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        variants={firstChildVariants}
        className="money-donation-card--text"
      >
        <h3 variants={firstChildVariants}>Donate Now</h3>
        <p variants={firstChildVariants}>
          Your contribution helps those in need. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. At ut consectetur
        </p>
      </motion.div>
      <motion.div variants={firstChildVariants} className="progress-bar">
        <motion.div
          variants={progressBarVariants}
          className="progress"
          style={{ width: progress }}
        ></motion.div>
      </motion.div>
      <motion.p variants={firstChildVariants}>
        $500 raised of $1000 goal
      </motion.p>
    </motion.div>
  );
};

export default MoneyDonationCard;
