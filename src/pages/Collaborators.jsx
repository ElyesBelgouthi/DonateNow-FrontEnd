const DUMMY_COLLABORATORS = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_JCI.png",
  },
  {
    id: 2,
    src: "https://www.biat.com.tn/sites/default/files/2019-04/communiquenouveaulogo.jpg",
  },
  {
    id: 3,
    src: "https://www.ilboursa.com/i/info/b/BNA000_156497a5-b630-4ae1-9200-70277bb63686_b.jpg",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1835px-Albaik_logo.svg.png",
  },
  {
    id: 5,
    src: "https://www.croissant-rouge.tn/logo.png",
  },
  {
    id: 6,
    src: "https://logowik.com/content/uploads/images/saida-group8478.jpg",
  },
];

const CollaboratorsPage = () => {
  return (
    <section className="collaborators--section">
      <h2>OUR COLLABORATORS</h2>
      <div className="collaborators--items">
        {DUMMY_COLLABORATORS.map((item) => (
          <div key={item.id} className="collaborators--item">
            <img src={item.src} alt={"collab" + item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaboratorsPage;
