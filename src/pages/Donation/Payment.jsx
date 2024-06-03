// CheckoutPage.js
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { API_BASE_URL } from "../../Context";

const stripePromise = loadStripe(
  "pk_test_51OhZ7cEVcBX5MPs0x5MAJJg6m3zv4oYonFoTNGsSbK56YBxvEG4mnaqlfEVNvaA9RqOlcGKiiDwDoNz4USXt2uGs00udvmL4iu"
);

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [totals, setTotals] = useState(null);
  useEffect(() => {
    setTotals(JSON.parse(localStorage.getItem("Totals")));

    fetch(API_BASE_URL + "Auth/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000, currency: "usd" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="payment-receipt">
      {clientSecret && totals && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <div className="receipt-details">
            <h2 className="receipt-title">Payment Receipt</h2>
            <div className="receipt-item">
              <span className="item-label">Total Products Price:</span>
              <span className="item-value">${totals.totalProductPrice}</span>
            </div>
            <div className="receipt-item">
              <span className="item-label">Total Money Donated:</span>
              <span className="item-value">${totals.totalMoneyDonated}</span>
            </div>
            <hr />
            <div className="receipt-item bigger">
              <span className="item-label">Total:</span>
              <span className="item-value">${totals.total}</span>
            </div>
          </div>
          <CheckoutForm total={totals.total} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
