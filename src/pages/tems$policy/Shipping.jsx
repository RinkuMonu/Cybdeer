import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Shipping = () => {
  return (
    <main>
      <section
        className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Shipping Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Shipping Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h3 className="section-heading">
              <strong>
                {" "}
                Cybdeer Network Pvt Ltd Small  - Shipping Policy
              </strong>
            </h3>
            <h3 className="section-heading">
              <strong>Processing Time</strong>
            </h3>
            <p>
              All orders are delivered within 2-3 business days. Orders are not
              shipped or delivered on weekends or holidays. If we are
              experiencing a high volume of orders, shipments may be delayed by
              a few days. Please allow additional days in transit for delivery.
              If there will be a significant delay in the shipment of your
              order, we will contact you via email or phone.
            </p>
            <p>
              Shipping Time Domestic Shipping: Orders will be delivered within 3
              to 4 weeks from the date of order confirmation. Please note that
              delivery times may be affected by factors beyond our control, such
              as weather conditions, customs delays, and other unforeseen
              circumstances.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .breadcrumb__area {
          background-color: #f5f5f5;
          padding-top: 60px;
          padding-bottom: 60px;
          margin: 0 15px;
        }

        .breadcrumb__content h3 {
          font-size: 24px;
          font-weight: bold;
        }

        .breadcrumb__list {
          font-size: 16px;
        }

        .breadcrumb-icon {
          margin: 0 8px;
        }

        .section-heading {
          background-color: #f2f2f2;
          font-family: "PT Sans", sans-serif;
          font-size: 21px;
          font-weight: bold;
          padding: 10px 0;
          margin: 20px 0;
        }

        .terms-list {
          list-style: none;
          padding-left: 0;
          margin-left: 15px;
        }

        .terms-list li {
          font-family: "PT Sans", sans-serif;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export default Shipping;
