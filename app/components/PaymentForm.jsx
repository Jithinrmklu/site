"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e) => {
        e.preventDefault();
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
            const { data } = await fetch("https://api.stripe.com/v1/payment_intents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { amount: 89 } }),
            });
            const clientSecret = data;

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit} className="max-w-lg mx-auto mt-6 py-10">
            <label className="block text-sm font-medium text-gray-700">Card details</label>
            <div className="mt-1 bg-white rounded-md shadow-sm">
                <div id="card-element" className="p-4">
                    <CardElement />
                </div>
            </div>

            {/* Used to display form errors. */}
            <div className="mt-2 text-red-500" role="alert">
                {/* Display error messages here */}
            </div>

            <button
                type="submit"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-800"
            >
                Pay
            </button>
        </form>
    );
}
