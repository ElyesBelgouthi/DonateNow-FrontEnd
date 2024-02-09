import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoneyCartCard from "../../components/MoneyCartCard";
import ProductCardPayment from "../../components/ProductCardPayment";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [productCart, setProductCart] = useState([]);
  const [fundraisingOps, setFundraisingOps] = useState([]);

  useEffect(() => {
    const productCartSub =
      JSON.parse(localStorage.getItem("ProductCart")) || [];
    setProductCart(productCartSub);

    const fundraisingOpsSub =
      JSON.parse(localStorage.getItem("FundraisingOps")) || [];
    setFundraisingOps(fundraisingOpsSub);
  }, [setProductCart, setFundraisingOps]);

  const handleProductDelete = (productId) => {
    const updatedCart = productCart.filter((item) => item.id !== productId);
    localStorage.setItem("ProductCart", JSON.stringify(updatedCart));
    setProductCart(updatedCart);
  };

  const handleFundraisingDelete = (fundraisingId) => {
    const updatedCart = fundraisingOps.filter(
      (item) => item.id !== fundraisingId
    );
    localStorage.setItem("FundraisingOps", JSON.stringify(updatedCart));
    setFundraisingOps(updatedCart);
  };

  const totalProductPrice = productCart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  const totalItems = productCart.length;
  const totalFundingOps = fundraisingOps.length;
  const totalMoneyDonated = fundraisingOps.reduce(
    (total, item) => total + item.donationAmount,
    0
  );
  const total = totalProductPrice + totalMoneyDonated;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="payment--container"
    >
      <div className="order--details">
        <h2>Products Donated</h2>
        <p>You donated {totalItems} product variants</p>
        <div className="order--products">
          {productCart.length > 0 &&
            productCart.map((product) => (
              <div key={product.id}>
                <ProductCardPayment
                  key={product.id}
                  product={product}
                  onDelete={handleProductDelete}
                />
              </div>
            ))}
        </div>
        <div className="order--subtotals">
          <h3>
            Total Products Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            <span>${totalProductPrice.toFixed(2)}</span>
          </h3>
          <h3>
            Total Money Donated &nbsp;&nbsp;:
            <span>${totalMoneyDonated.toFixed(2)}</span>
          </h3>
        </div>
      </div>
      <div className="order--details">
        <h2>Money Donated</h2>
        <p>You donated to {totalItems} fundraising operations</p>
        <div className="order--products">
          {fundraisingOps.length > 0 &&
            fundraisingOps.map((fundraising) => (
              <div key={fundraising.id}>
                <MoneyCartCard
                  key={fundraising.id}
                  fundraising={fundraising}
                  onDelete={handleFundraisingDelete}
                />
              </div>
            ))}
        </div>
        <div className="order--total">
          <h3>
            Total:<span>${total}</span>
          </h3>
          <Link to="/payment">
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
