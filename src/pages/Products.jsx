import { motion } from "framer-motion";

import ProductCard from "../components/ProductCard";

import DUMMY_PRODUCTS from "../DUMMY-CONTENT/DUMMY_PRODUCTS";

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
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="collaborators--section"
    >
      <h2>PRODUCTS</h2>
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
