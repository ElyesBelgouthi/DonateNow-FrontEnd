import { motion } from "framer-motion";
import MoneyDonationCard from "../../components/MoneyDonationCard";
import { useState } from "react";
import MoneyDonationModal from "../../components/MoneyDonationModal";
import { useLoaderData } from "react-router-dom";

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
  const fundraisingOps = useLoaderData();

  const [fundraisingModal, setFundraisingModal] = useState(null);
  const [showMoneyModal, setShowMoneyModal] = useState(false);

  return (
    <>
      {fundraisingModal && (
        <MoneyDonationModal
          showMoneyModal={showMoneyModal}
          setShowMoneyModal={setShowMoneyModal}
          fundraisingModal={fundraisingModal}
          progress={fundraisingModal.progress}
        />
      )}
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
          {fundraisingOps.map((fundraising) => (
            <div
              key={fundraising.id}
              className="money--donation--card--container"
              onClick={() => {
                setShowMoneyModal(true);
                setFundraisingModal(fundraising);
              }}
            >
              <MoneyDonationCard
                key={fundraising.id}
                fundraising={fundraising}
              />
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};
export default MoneyDonationPage;
