import Button from "../UI/Button";

const HomePage = () => {
  return (
    <section className="main--section">
      <div className="home--title">
        <h1>
          <span>SAVE</span>
          <span>PALESTINE</span>
        </h1>
      </div>

      <p className="home--description">
        By contributing to reputable organizations or initiatives that provide
        aid, medical supplies, and support to those in need, you can help bring
        hope and assistance to the people of Palestine who have endured
        longstanding hardships.
      </p>
      <Button type="button" className="button--1">
        Donate
      </Button>
    </section>
  );
};

export default HomePage;
