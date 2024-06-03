import { useState } from "react";
import { motion } from "framer-motion";

import Button from "../UI/Button";
import abouOubayda from "../assets/abou-oubayda.png";
import children from "../assets/children.png";
import insat from "../assets/insat_logo.png";

const ALL_CONTENT = [
  {
    title: "HAMAS ASSOCIATION",
    description: `Welcome to Save Palestine, a compassionate initiative born out of the
        hearts and minds of students from the International School of Advanced
        Technologies (INSAT). We, the students of INSAT, have come together to
        form an association with a shared commitment to making a meaningful
        impact in the lives of the resilient Palestinian people.`,
    src: abouOubayda,
  },
  {
    title: "OUR MISSION",
    description: `At Hamas, our mission is to stand hand-in-hand with the people of Palestine during times of hardship. The driving force behind our association is the belief that, as students, we can leverage our collective energy and enthusiasm to contribute positively to the world.`,
    src: children,
  },
  {
    title: "JOIN THE STUDENT-LED MOVEMENT",
    description: `At Hamas, our mission is to stand hand-in-hand with the people of Palestine during times of hardship. The driving force behind our association is the belief that, as students, we can leverage our collective energy and enthusiasm to contribute positively to the world.`,
    src: insat,
  },
];

const textContainer = {
  hidden: {
    x: -300,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
      stiffness: 120,
    },
  },
};

const imageContainer = {
  hidden: {
    x: 300,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

const firstChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="main--section--smaller">
      <motion.div
        key={`text-${index}`}
        className="text--content"
        variants={textContainer}
        animate="visible"
        initial="hidden"
      >
        <motion.div className="home--title" variants={firstChildVariants}>
          <h2> {ALL_CONTENT[index].title}</h2>
        </motion.div>
        <motion.p
          className="home--description"
          variants={firstChildVariants}
          transition={{ delay: 0.5 }}
        >
          {ALL_CONTENT[index].description}
        </motion.p>
        {index !== ALL_CONTENT.length - 1 && (
          <motion.div variants={firstChildVariants}>
            <Button
              type="button"
              className="button--1"
              onClick={() => {
                setIndex((prevIndex) => prevIndex + 1);
              }}
            >
              Continue
            </Button>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        key={`image-${index}`}
        className="image--content"
        variants={imageContainer}
        animate="visible"
        initial="hidden"
      >
        <img src={ALL_CONTENT[index].src} />
      </motion.div>
    </section>
  );
};

export default AboutPage;
