import { useState } from "react";

const ProductCard = ({ product }) => {
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

  const handleDonate = () => {
    const ProductCart = JSON.parse(localStorage.getItem("ProductCart")) || [];

    const productIndex = ProductCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      ProductCart[productIndex].amount += value;
    } else {
      ProductCart.push({
        ...product,
        amount: value,
      });
    }

    localStorage.setItem("ProductCart", JSON.stringify(ProductCart));

    setValue(1);
  };

  return (
    <div className="card--container">
      <div className="card--image">
        <img
          src={product.imageUrl}
          alt="rice"
          className="card--image-content"
        />
      </div>
      <div className="card--text">
        <h3>{product.name}</h3>
        <p>
          <span>Price per {product.measureUnit} </span>
          <span className="card--price">{product.price}$</span>
        </p>
        <div className="card--adding">
          <input
            type="number"
            name="quantity"
            min={1}
            max={999}
            value={value}
            id="product-quantity"
            onChange={handleChange}
          />
          <button type="button" className="button--2" onClick={handleDonate}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
