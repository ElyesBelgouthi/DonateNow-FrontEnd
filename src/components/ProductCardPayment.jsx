import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ProductCardPayment = ({ product, onDelete, onAmountChange }) => {
  const [value, setValue] = useState(product.amount);

  const handleDelete = (event) => {
    onDelete(product.id);
  };

  return (
    <div className="pcard--container">
      <div className="pcard--image">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card--image-content pcard--image-content"
        />
      </div>
      <div className="pcard--text">
        <h3>{product.name}</h3>
        <p>
          Price per {product.measureUnit}: ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="card--adding pcard--adding">
        <input
          type="number"
          name="quantity"
          min="1"
          max="999"
          value={value}
          disabled={true}
        />
      </div>
      <div className="pcard--total">
        ${parseFloat((value * product.price).toFixed(2))}
      </div>
      <div className="pcard--delete" onClick={() => handleDelete()}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default ProductCardPayment;
