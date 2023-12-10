import { useState } from "react";
import Button from "../UI/Button";

const ALL_CONTENT = [
  {
    title: "HAMAS ASSOCIATION",
    description: `Welcome to Save Palestine, a compassionate initiative born out of the
        hearts and minds of students from the International School of Advanced
        Technologies (INSAT). We, the students of INSAT, have come together to
        form an association with a shared commitment to making a meaningful
        impact in the lives of the resilient Palestinian people.`,
  },
  {
    title: "OUR MISSION",
    description: `At Hamas, our mission is to stand hand-in-hand with the people of Palestine during times of hardship. The driving force behind our association is the belief that, as students, we can leverage our collective energy and enthusiasm to contribute positively to the world.`,
  },
  {
    title: "JOIN THE STUDENT-LED MOVEMENT",
    description: `At Hamas, our mission is to stand hand-in-hand with the people of Palestine during times of hardship. The driving force behind our association is the belief that, as students, we can leverage our collective energy and enthusiasm to contribute positively to the world.`,
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="main--section main--section--smaller">
      <div className="home--title">
        <h2> {ALL_CONTENT[index].title}</h2>
      </div>
      <p className="home--description">{ALL_CONTENT[index].description}</p>
      {index !== ALL_CONTENT.length - 1 && (
        <div
          onClick={() => {
            setIndex((prevIndex) => prevIndex + 1);
          }}
        >
          <Button type="button" className="button--1">
            Continue
          </Button>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
