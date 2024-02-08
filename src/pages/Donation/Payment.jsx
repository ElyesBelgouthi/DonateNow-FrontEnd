import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OhZ7cEVcBX5MPs0x5MAJJg6m3zv4oYonFoTNGsSbK56YBxvEG4mnaqlfEVNvaA9RqOlcGKiiDwDoNz4USXt2uGs00udvmL4iu"
);

const PaymentPage = () => {
  const options = {
    clientSecret:
      "1_secret_sk_test_51OhZ7cEVcBX5MPs0GprMjcjLRb9mcuFgBQ4UIHLxtYc3EbmSbT9XqcS1vXDCqi8HNf12OYsQsahHfEIGku1QK2Mn00kKrCh1HQ",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentElement />
    </Elements>
  );
};

export default PaymentPage;
