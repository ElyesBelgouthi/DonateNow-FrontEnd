import DUMMY_PRODUCTS from "../../DUMMY-CONTENT/DUMMY_PRODUCTS";
import ProductCardPayment from "../../components/ProductCardPayment";
import visa from "../../assets/Visa_Inc._logo.svg.png";
import mastercard from "../../assets/MasterCard_Logo.svg.png";
import rupay from "../../assets/1200px-Rupay-Logo.png";
import { useState } from "react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="payment--container">
      <div className="order--details">
        <h2>Donation cart</h2>
        <p>You have n item in your cart</p>
        <div className="order--products">
          {DUMMY_PRODUCTS.map((item, index) => (
            <div key={index}>
              <ProductCardPayment
                key={index}
                title={item.title}
                measureUnit={item.measureUnit}
                pricePerUnit={item.pricePerUnit}
              />
            </div>
          ))}
        </div>
      </div>
      <form className="payment--details">
        <h2>Card Details</h2>
        <div className="card--types">
          <h5>Card Type</h5>
          <div className="card--type">
            <div className="card--type--image">
              <img src={mastercard} alt="mastercard" />
            </div>
            <div className="card--type--image">
              <img src={visa} alt="visa" />
            </div>
            <div className="card--type--image">
              <img src={rupay} alt="rupay" />
            </div>
            <div className="card--type--image">
              <p>Other</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
