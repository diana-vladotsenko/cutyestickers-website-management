import Head from "next/head";

export default function Product() {
  return (
    <div className="a">
      <div
        className="contact-basket-container"
        style={{ marginLeft: "80px", marginRight: "80px" }}
      >
        <p className="pages-container">
          <a className="page-1" href="/">
            Home/
          </a>
          <a className="page-2" href="/product">
            Product
          </a>
        </p>
        <i className="bi-basket">
          <img
            src="/icons/basket.svg"
            alt="Basket Icon"
            className="basket-icon"
          />
        </i>
      </div>
    </div>
  );
}
