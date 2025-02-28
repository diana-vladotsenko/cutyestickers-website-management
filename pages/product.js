/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../api/data.json") // Make sure it's inside the "public" folder
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="a">
      <div
        className="contact-basket-container"
        style={{ marginLeft: "80px", marginRight: "80px" }}
      >
        <p className="pages-container">
          <Link className="page-1" href="/">
            Home/
          </Link>
          {/* need to add style here */}
          <Link className="page-2" href="/product">
            Product
          </Link>
        </p>
        <i className="bi-basket">
          <img
            src="/icons/basket.svg"
            alt="Basket Icon"
            className="basket-icon"
          />
        </i>
      </div>

      <div className="page-product-container">
        <div className="page-product-images">
          <img src="" alt="Example-Big" className="product-image-big" />
          <div className="product-image-small-container">
            <img src="" alt="Example-Small" className="product-image-small" />
            <img src="" alt="Example-Small" className="product-image-small" />
            <img src="" alt="Example-Small" className="product-image-small" />
          </div>
        </div>
        <div className="product-image-description">
          <div className="product-name-price">
            <p className="h2" style={{ fontWeight: "500" }} id="NameOfProduct">
              Name Of Set
            </p>
            <p
              className="h2"
              style={{ fontWeight: "500", fontSize: "40px" }}
              id="price"
            >
              Price€
            </p>
          </div>
          <div className="star-reviews-container">
            <div className="reviews-star">
              <i className="bi-star">
                <img
                  src="/icons/star.svg"
                  alt="Star Icon"
                  className="star-icon"
                />
              </i>
              <i className="bi-star">
                <img
                  src="/icons/star.svg"
                  alt="Star Icon"
                  className="star-icon"
                />
              </i>
              <i className="bi-star">
                <img
                  src="/icons/star.svg"
                  alt="Star Icon"
                  className="star-icon"
                />
              </i>
              <i className="bi-star">
                <img
                  src="/icons/star.svg"
                  alt="Star Icon"
                  className="star-icon"
                />
              </i>
              <i className="bi-star">
                <img
                  src="/icons/star.svg"
                  alt="Star Icon"
                  className="star-icon"
                />
              </i>
            </div>
            <p
              id="notice"
              style={{
                color: "#8B8B8B",
                fontSize: "20px",
                fontWeight: "200",
                marginLeft: "5px",
              }}
            >
              No reviews
            </p>
          </div>

          <div
            id="productPageDescription"
            className="product-description-container"
          >
            <p className="product-description">
              {product.description}
            </p>
          </div>
          <div className="button-container">
            <button className="add-to-card-big">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}


