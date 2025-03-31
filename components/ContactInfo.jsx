/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Basket from "./Basket"; // This loads Snipcart

const ContactInfo = () => {
  const openCart = () => {
    if (window.Snipcart) {
      window.Snipcart.api.theme.cart.open();
    }
  };

  return (
    <div className="contact-basket-container">
      <p className="mail-container">
        <Link className="mail" href="mailto:cutyestickers@gmail.com">
          cutyestickers@gmail.com
        </Link>
      </p>
      <i className="bi-basket" onClick={openCart} style={{ cursor: "pointer" }}>
        <img
          src="/icons/basket.svg"
          alt="Basket Icon"
          className="basket-icon"
        />
      </i>
      <Basket /> {/* Ensure Snipcart script is loaded */}
    </div>
  );
};

export default ContactInfo;
