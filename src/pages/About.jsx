import { useState } from "react";
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

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="main--section--smaller">
      <div className="text--content">
        <div className="home--title">
          <h2> {ALL_CONTENT[index].title}</h2>
        </div>
        <p className="home--description">{ALL_CONTENT[index].description}</p>
        {index !== ALL_CONTENT.length - 1 && (
          <Button
            type="button"
            className="button--1"
            onClick={() => {
              setIndex((prevIndex) => prevIndex + 1);
            }}
          >
            Continue
          </Button>
        )}
      </div>
      <div className="image--content">
        <img src={ALL_CONTENT[index].src} />
      </div>
    </section>
  );
};

export default AboutPage;
