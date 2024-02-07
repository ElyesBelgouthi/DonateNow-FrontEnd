import { AnimatePresence } from "framer-motion";
import CurrencyInput from "react-currency-input-field";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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

              <motion.h3 variants={firstChildVariants}>Donate now</motion.h3>
            </motion.div>
            <div className="money--donation--modal--bot">
              <motion.p variants={firstChildVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolore quos nobis pariatur consequuntur a? Nam, iure
                aperiam at repellendus quas reprehenderit ex porro facilis est
                velit commodi quod nisi.
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
                $500 raised of $1000 goal
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
                  defaultValue={1000}
                  decimalsLimit={2}
                />
              </motion.div>
              <motion.div variants={firstChildVariants}>
                <Button>Donate</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MoneyDonationModal;
