import DUMMY_PRODUCTS from "../DUMMY-CONTENT/DUMMY_PRODUCTS";

const PaymentPage = () => {
  return (
    <div className="payment--container">
      <div className="order--details">
        <h2>Donation cart</h2>
        <h4>You have n item in your cart</h4>
        <div className="order--products"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
