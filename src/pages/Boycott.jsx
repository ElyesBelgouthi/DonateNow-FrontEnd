import { motion } from "framer-motion";

const DUMMY_BOYCOTT = [
  {
    id: 1,
    src: "https://companieslogo.com/img/orig/KO-b23a2a5e.png?t=1684129869",
  },
  {
    id: 2,
    src: "https://pngimg.com/uploads/kfc/kfc_PNG53.png",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pepsi_logo_%282014%29.svg/2560px-Pepsi_logo_%282014%29.svg.png",
  },
  {
    id: 4,
    src: "https://logos-download.com/wp-content/uploads/2016/02/Tommy_Hilfiger_logo_transparent.png",
  },
  {
    id: 5,
    src: "https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/originals/19/58/44/19584422dd025495732e84f7d531a6ea.png",
  },
  {
    id: 9,
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/McDonald%27s_1968_logo.png",
  },
  {
    id: 10,
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1278px-Logo_Carrefour.svg.png",
  },
  {
    id: 11,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png",
  },
  {
    id: 12,
    src: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.png",
  },
  // Add more brands as needed
];

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

const BoycottPage = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="collaborators--section"
    >
      <h2>BOYCOTT</h2>
      <div className="collaborators--items">
        {DUMMY_BOYCOTT.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="collaborators--item"
          >
            <img src={item.src} alt={"boycott" + item.id} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BoycottPage;
