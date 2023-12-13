import rice from "../assets/rice.jpg";

const ProductCard = (props) => {
  return (
    <div className="card--container">
      <div className="card--image">
        <img src={rice} alt="rice" className="card--image-content" />
      </div>
      <div className="card--text">
        <h3>{props.title}</h3>
        <p>
          <span>Price per {props.measureUnit} </span>
          <span className="card--price">{props.pricePerUnit}$</span>
        </p>
        <div className="card--adding">
          <input
            type="number"
            name="quantity"
            min={1}
            max={999}
            value={1}
            id="product-quantity"
          />
          <button type="button" className="button--2">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
