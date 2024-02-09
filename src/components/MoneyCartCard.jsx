import { useState } from "react";
import rice from "../assets/rice.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";

const MoneyCartCard = ({ fundraising, onDelete }) => {
  const formatTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return title;
  };

  const handleDelete = (event) => {
    onDelete(fundraising.id);
  };

  return (
    <div className="pcard--container">
      <div className="pcard--image">
        <img
          src={fundraising.imageUrl}
          alt={fundraising.title}
          className="card--image-content pcard--image-content"
        />
      </div>
      <div className="pcard--text">
        <h3>{formatTitle(fundraising.title)}</h3>
      </div>

      <CurrencyInput
        prefix="$"
        id="input-card"
        name="money"
        defaultValue={fundraising.donationAmount}
        decimalsLimit={2}
        disabled={true}
      />

      <div className="pcard--delete" onClick={() => handleDelete()}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default MoneyCartCard;
