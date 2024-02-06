import { motion } from "framer-motion";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const firstChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const DonationTypePage = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="collaborators--section"
    >
      <h2>DONATE</h2>
      <h3>Support Us as You Please</h3>
      <div className="donation--types">
        <motion.div variants={itemVariants} class="donation-type-card">
          <div class="donation-type-front donation-type-front-1">
            <h3>Donate Money</h3>
          </div>
          <div class="donation-type-back">
            <h3>Donate Money</h3>
            <p>
              Your monetary donation directly aids those affected by the crisis
              in Palestine, providing vital assistance and hope during these
              challenging times.
            </p>
            <Link to="money" className="donation--type--btn">
              <Button>Continue</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div class="donation-type-card" variants={itemVariants}>
          <div class="donation-type-front donation-type-front-2">
            <h3>Donate Products</h3>
          </div>
          <div class="donation-type-back">
            <h3>Donate Products</h3>
            <p>
              Your generous donations of essential products are vital for the
              people of Gaza who are in urgent need.
            </p>
            <Link to="products" className="donation--type--btn">
              <Button>Continue</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DonationTypePage;
