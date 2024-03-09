import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ handleSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error("Error creating payment method:", error.message);
      alert(error.message);
    } else {
      handleSubmit(paymentMethod);
    }

    setLoading(false);
    console.log(localStorage);
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#333",
              "::placeholder": {
                color: "#999",
              },
            },
            invalid: {
              color: "#e53e3e",
            },
          },
        }}
        className="border rounded-md p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
