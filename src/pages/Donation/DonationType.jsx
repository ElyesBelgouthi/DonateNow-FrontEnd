import { motion } from "framer-motion";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              veniam distinctio .
            </p>
          </div>
        </motion.div>
        <motion.div class="donation-type-card" variants={itemVariants}>
          <div class="donation-type-front donation-type-front-2">
            <h3>Donate Products</h3>
          </div>
          <div class="donation-type-back">
            <h3>Donate Products</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              veniam distinctio .
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DonationTypePage;
