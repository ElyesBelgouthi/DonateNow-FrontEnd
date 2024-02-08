import { useState } from "react";
import rice from "../assets/rice.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";

const MoneyCartCard = (props) => {
  const [value, setValue] = useState(10000);
  const handleChange = (event) => {
    let newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className="pcard--container">
      <div className="pcard--image">
        <img
          src={rice}
          alt="rice"
          className="card--image-content pcard--image-content"
        />
      </div>
      <div className="pcard--text">
        <h3>{props.title}</h3>
      </div>

      <CurrencyInput
        prefix="$"
        id="input-card"
        name="money"
        defaultValue={value}
        decimalsLimit={2}
        onChange={handleChange}
      />

      <div className="pcard--delete">
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default MoneyCartCard;
