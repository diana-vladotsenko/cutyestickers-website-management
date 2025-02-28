/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-basket-container">
      <p className="mail-container">
        <Link className="mail" href="mailto:cutyestickers@gmail.com">
          cutyestickers@gmail.com
        </Link>
      </p>
      <i className="bi-basket">
        <img src="/icons/basket.svg" alt="Basket Icon" className="basket-icon" />
      </i>
    </div>
  );
};

export default ContactInfo;
