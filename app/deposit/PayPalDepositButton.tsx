"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../content";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createOrder: (data: unknown, actions: { order: { create: (order: unknown) => Promise<string> } }) => Promise<string>;
        onApprove: (data: unknown, actions: { order: { capture: () => Promise<unknown> } }) => Promise<void>;
        onError?: (err: Error) => void;
        onCancel?: () => void;
      }) => { render: (selector: string) => void };
    };
  }
}

export default function PayPalDepositButton() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      initializePayPal();
      return;
    }

    // Load PayPal script
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AYmdYVtg1sMdytUpNaMu3EPRDrjAXvO8qGRQSeUyLWdQPPBuZrd8y_4iLBkpFm9-v62PgOwK_C_9RrsB&currency=USD`;
    script.async = true;
    script.onload = () => {
      initializePayPal();
    };
    script.onerror = () => {
      setError("Failed to load PayPal. Please refresh the page or contact us.");
      setIsLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializePayPal = () => {
    if (!window.paypal) {
      setError("PayPal is not available. Please try again later.");
      setIsLoading(false);
      return;
    }

    try {
      window.paypal
        .Buttons({
          createOrder: function (_data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "175.00",
                  },
                  description: "Bonefishing Deposit",
                },
              ],
            });
          },
          onApprove: function (_data, actions) {
            return actions.order.capture().then(function () {
              setIsSuccess(true);
              // Redirect after a brief delay to show success message
              setTimeout(() => {
                window.location.href = "https://greatbonefishing.com/payment-successful";
              }, 2000);
            });
          },
          onError: function () {
            setError("Payment could not be processed. Please try again or contact us.");
          },
          onCancel: function () {
            // User cancelled - no action needed
          },
        })
        .render("#paypal-button-container");
      setIsLoading(false);
    } catch {
      setError("Could not initialize PayPal. Please refresh the page.");
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-600">Thank you for your deposit. Redirecting you to the confirmation page...</p>
      </div>
    );
  }

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-600"></div>
          <span className="ml-3 text-gray-600">Loading payment options...</span>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-red-800 font-medium">{error}</p>
              <p className="text-red-600 text-sm mt-1">
                Need help? Contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>{" "}
                or call{" "}
                <a href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`} className="underline">
                  {siteConfig.phoneUSA}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div id="paypal-button-container" className={isLoading ? "hidden" : ""}></div>
      
      {!isLoading && !error && (
        <p className="text-xs text-gray-400 text-center mt-4">
          Secure payment processing by PayPal. You can pay with your PayPal account or credit/debit card.
        </p>
      )}
    </div>
  );
}
