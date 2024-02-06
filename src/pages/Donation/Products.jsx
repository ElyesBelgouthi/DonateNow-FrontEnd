import { motion } from "framer-motion";

import ProductCard from "../../components/ProductCard";

import DUMMY_PRODUCTS from "../../DUMMY-CONTENT/DUMMY_PRODUCTS";
import { useState } from "react";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
    },
  },
};

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

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory((prev) => (prev == category ? null : category));
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="collaborators--section"
    >
      <h2>PRODUCTS</h2>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="products--categories"
      >
        <ul>
          <motion.li
            variants={buttonVariants}
            whileHover="hover"
            className={activeCategory === "Clothing" ? "active" : ""}
            onClick={() => handleClick("Clothing")}
          >
            Clothing
          </motion.li>
          <motion.li
            variants={buttonVariants}
            whileHover="hover"
            className={activeCategory === "Food" ? "active" : ""}
            onClick={() => handleClick("Food")}
          >
            Food
          </motion.li>
          <motion.li
            variants={buttonVariants}
            whileHover="hover"
            className={activeCategory === "Hygiene" ? "active" : ""}
            onClick={() => handleClick("Hygiene")}
          >
            Hygiene
          </motion.li>
          <motion.li
            variants={buttonVariants}
            whileHover="hover"
            className={activeCategory === "Medical" ? "active" : ""}
            onClick={() => handleClick("Medical")}
          >
            Medical
          </motion.li>
        </ul>
      </motion.div>
      <div className="collaborators--items">
        {DUMMY_PRODUCTS.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <ProductCard
              title={item.title}
              measureUnit={item.measureUnit}
              pricePerUnit={item.pricePerUnit}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProductsPage;
