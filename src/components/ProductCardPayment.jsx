import { useState } from "react";
import rice from "../assets/rice.jpg";

const ProductCardPayment = (props) => {
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    let newValue = parseInt(event.target.value);
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > 999) {
      newValue = 999;
    }
    setValue(newValue);
  };

  return (
    <div className="pcard--container">
      <div className="pcard--image">
        <img src={rice} alt="rice" className="card--image-content" />
      </div>
      <div className="pcard--text">
        <h3>{props.title}</h3>
        <p>
          Price per {props.measureUnit} {props.pricePerUnit}$
        </p>
        <div className="pcard--adding">
          <input
            type="number"
            name="quantity"
            min={1}
            max={999}
            value={value}
            id="product-quantity"
            onChange={handleChange}
          />
          <button type="button" className="button--2">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPayment;
