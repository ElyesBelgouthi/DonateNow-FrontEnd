import { motion } from "framer-motion";
import MoneyDonationCard from "../../components/MoneyDonationCard";
import { useState } from "react";
import MoneyDonationModal from "../../components/MoneyDonationModal";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const MoneyDonationPage = () => {
  const [showMoneyModal, setShowMoneyModal] = useState(true);

  return (
    <>
      <MoneyDonationModal
        showMoneyModal={showMoneyModal}
        setShowMoneyModal={setShowMoneyModal}
      />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="collaborators--section"
      >
        <h2>DONATE MONEY</h2>
        <p>Be a Hero, Make a Difference Today</p>
        <div className="money--donation--cards--container">
          <div className="money--donation--card--container">
            <MoneyDonationCard />
          </div>
          <div className="money--donation--card--container">
            <MoneyDonationCard />
          </div>
          <div className="money--donation--card--container">
            <MoneyDonationCard />
          </div>
          <div className="money--donation--card--container">
            <MoneyDonationCard />
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default MoneyDonationPage;
