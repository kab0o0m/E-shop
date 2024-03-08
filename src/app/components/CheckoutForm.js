import { CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setPaymentError(result.error.message);
    } else {
      console.log(result.paymentMethod);
      // Handle successful payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <div className="mb-4">
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
      </div>

      {paymentError && <div className="text-red-500 mt-2">{paymentError}</div>}
    </form>
  );
}
