/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Basket from "./Basket";
import data from "../src/data.json";

const ProductsList = () => {
  return (
    <div className="products-section" id="products">
      <div className="heading2-text">
        <h2 className="h2">Products</h2>
        <p className="products-undertext">
          Perfect for planners, personal use and gifts!
        </p>
        <img
          src="/images/elipse_products.svg"
          alt="elipse-decoration"
          className="elipse-3"
        />
      </div>

      <div className="products-line-1">
        {data.map((product) => (
          <div className="product-container" key={product.id}>
            <div className="product-card">
              <img
                src={product["image-1"]}
                alt={product.name}
                className="product-img"
              />
              <div className="product-info-container">
                <div className="card-introduction">
                  <div className="title-container">
                    <p className="card-title">{product.name}</p>
                    <p className="card-text">Digital Download</p>
                  </div>
                  <div className="price-container">
                    <p className="card-price">{product.price.toFixed(2)}€</p>
                  </div>
                </div>
                <div className="card-buttons">
                  <button
                    className="button-add-to-card snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-name={product.name}
                    data-item-url={`/products/${product.id}`}
                    data-item-description={product.description}
                    data-item-image={product["image-1"]}
                  >
                    Add To Cart
                  </button>
                  <button id="see-more" className="button-see-more">
                    <Link
                      className="nav-link-see-more-button"
                      href={`/products/${product.id}`}
                    >
                      See More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="products-line-2">
        <p style={{ textAlign: "center", marginTop: "40px" }} className="undertext">
          There would be more products...
        </p>
      </div>

      <Basket /> {/* Loads Snipcart script */}
    </div>
  );
};

export default ProductsList;
