import { AnimatePresence } from "framer-motion";
import CurrencyInput from "react-currency-input-field";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ModalVariants = {
  hidden: { opacity: 0, y: -900 },
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

const MoneyDonationModal = (props) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const fundraising = props.fundraisingModal;
  const progress = parseInt(props.progress) + "%";
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

  const handleDonate = () => {
    const existingFundraisingOps =
      JSON.parse(localStorage.getItem("FundraisingOps")) || [];

    const existingIndex = existingFundraisingOps.findIndex(
      (op) => op.id === fundraising.id
    );

    if (existingIndex !== -1) {
      existingFundraisingOps[existingIndex].donationAmount = donationAmount;
    } else {
      existingFundraisingOps.push({
        ...fundraising,
        donationAmount: donationAmount,
      });
    }

    localStorage.setItem(
      "FundraisingOps",
      JSON.stringify(existingFundraisingOps)
    );

    props.setShowMoneyModal(false);
    setDonationAmount(0);
  };

  return (
    <AnimatePresence>
      {props.showMoneyModal && (
        <div className="modal--container">
          <motion.div
            variants={ModalVariants}
            className="money--donation--modal"
            animate="visible"
            initial="hidden"
          >
            <motion.div
              variants={firstChildVariants}
              className="money--donation--modal--top"
              style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 5), rgba(84, 21, 21, 0)),
      url(${fundraising.imageUrl})`,
              }}
            >
              <motion.div
                onClick={() => {
                  props.setShowMoneyModal(false);
                }}
                className="modal-icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </motion.div>

              <motion.h3 variants={firstChildVariants}>
                {fundraising.title}
              </motion.h3>
            </motion.div>
            <div className="money--donation--modal--bot">
              <motion.p variants={firstChildVariants}>
                {fundraising.description}
              </motion.p>
              <motion.div
                variants={firstChildVariants}
                className="progress-bar"
              >
                <motion.div
                  variants={progressBarVariants}
                  className="progress"
                  style={{ width: progress }}
                ></motion.div>
              </motion.div>
              <motion.p variants={firstChildVariants}>
                ${fundraising.currentSum} raised of ${fundraising.goalSum} goal
              </motion.p>

              <motion.div
                variants={firstChildVariants}
                className="money--donation--modal--money--input"
              >
                <CurrencyInput
                  prefix="$"
                  id="input-example"
                  name="money"
                  placeholder="ex: $ 1 000,00"
                  decimalsLimit={2}
                  onValueChange={(value) =>
                    setDonationAmount(parseFloat(value || 0))
                  }
                />
              </motion.div>
              <motion.div variants={firstChildVariants}>
                <Button onClick={handleDonate}>Donate</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MoneyDonationModal;
