import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Refund = () => {
  return (
    <main>
      <section
        className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Refund Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Refund Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h3 className="section-heading">
              <strong>Return And Refund Policy</strong>
            </h3>

            <h3 className="section-heading">
              <strong>Return</strong>
            </h3>
            <p>
              We have a 5-day return policy, which means you have 5 days after
              receiving your item to request a return.
            </p>
            <p>
              Once the return product is received it will be inspected and the
              return will be approved within 2 days
            </p>

            <h3 className="section-heading">
              <strong>Refunds</strong>
            </h3>
            <p>
              We will notify you once we’ve received and inspected your return,
              and let you know if the refund was approved or not. If approved,
              you’ll be automatically refunded on your original payment method
              within 10 business days. Please remember it can take some time for
              your bank or credit card company to process and post the refund
              too. If more than 15 business days have passed since we’ve
              approved your return, please contact us at Email: info@cybdeer.in
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

        .section-text {
          font-family: "PT Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          margin-top: 0;
          margin-bottom: 10px;
          color: #777;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export default Refund;
