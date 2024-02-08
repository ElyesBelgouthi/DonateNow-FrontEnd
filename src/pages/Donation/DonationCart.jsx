import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DUMMY_PRODUCTS from "../../DUMMY-CONTENT/DUMMY_PRODUCTS";
import MoneyCartCard from "../../components/MoneyCartCard";
import ProductCardPayment from "../../components/ProductCardPayment";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
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

const DonationCartPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="payment--container"
    >
      <div className="order--details">
        <h2>Products Donated</h2>
        <p>You have n item in your cart</p>
        <div className="order--products">
          {DUMMY_PRODUCTS.map((item, index) => (
            <div key={index}>
              <ProductCardPayment
                key={index}
                title={item.title}
                measureUnit={item.measureUnit}
                pricePerUnit={item.pricePerUnit}
              />
            </div>
          ))}
        </div>
        <div className="order--subtotals">
          <h3>
            Total Products Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            <span>$1000.00</span>
          </h3>
          <h3>
            Total Money Donated &nbsp;&nbsp;:<span>$1000.00</span>
          </h3>
        </div>
      </div>
      <div className="order--details">
        <h2>Money Donated</h2>
        <p>You have n item in your cart</p>
        <div className="order--products">
          {DUMMY_PRODUCTS.map((item, index) => (
            <div key={index}>
              <MoneyCartCard key={index} title={item.title} />
            </div>
          ))}
        </div>
        <div className="order--total">
          <h3>
            Total:<span>$3000</span>
          </h3>
          <Link>
            <motion.h4 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              Proceed to Pay <FontAwesomeIcon icon={faCoins} />
            </motion.h4>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationCartPage;
