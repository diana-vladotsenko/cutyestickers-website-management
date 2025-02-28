/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../src/data.json";
import dataReview from "../../src/review.json";

export default function Product() {
  //We'll use useRouter() to grab the product ID dynamically.
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error("Product not found for ID:", id);
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const foundReview = dataReview.find((item) => item.id === parseInt(id));
      if (foundReview) {
        setReview(foundReview);
      } else {
        console.error("Review not found for ID:", id);
      }
    }
  }, [id]);

  if (!product) {
    return <h2>Loading product..</h2>;
  }

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

      {/* product INFO generative page with json */}
      <div className="page-product-container">
        <div className="page-product-images">
          <img
            src={product["image-1"]}
            alt={product.name}
            className="product-image-big"
          />

          <div className="product-image-small-container">
            <img
              src={product["image-2"]}
              alt={product.name}
              className="product-image-small"
            />
            <img
              src={product["image-3"]}
              alt={product.name}
              className="product-image-small"
            />
            <img
              src={product["image-4"]}
              alt={product.name}
              className="product-image-small"
            />
          </div>
        </div>

        <div className="product-image-description">
          <div className="product-name-price">
            <p className="h2" style={{ fontWeight: "500" }}>
              {product.name}
            </p>
            <p className="h2" style={{ fontWeight: "500", fontSize: "40px" }}>
              {product.price}
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

          <div className="product-description-container">
            <p
              className="product-description"
              dangerouslySetInnerHTML={{
                __html: product.description.replace(/\n/g, "<br/>"),
              }}
            />
          </div>
          <div className="button-container">
            <button className="add-to-card-big">Add To Card</button>
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="reviews-section">
        <div
          className="heading2-text"
          style={{
            justifyContent: "start",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
          <h2 className="h2">Reviews</h2>
        </div>
        <div className="addReview-filter-container">
          <div className="filter">
            <select className="select" name="filter">
              <option className="option" value="newest">
                Newest
              </option>
              <option className="option" value="oldest">
                Oldest
              </option>
              <option className="option" value="highest">
                Highest Rating
              </option>
              <option className="option" value="lowest">
                Lowest Rating
              </option>
            </select>
          </div>
          <div className="card-buttons">
            <button id="see-more" className="button-see-more">
              <a className="nav-link-see-more-button" href="/addreview">
                Add Review
              </a>
            </button>
          </div>
        </div>

        <div className="review-container">
          <div className="user-review">
            {/* <i className="bi-star"/>
              <img src="/icons/user.svg" alt="User Icon" className="user-icon"/> */}
            <div className="date-review">
              <p style={{ color: "#8B8B8B" }} className="date">
                {review.date}
              </p>
              <div className="reviews-star" style={{marginTop:"auto"}}>
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
            </div>
            <div className="user-text-title">
              <div
                className="user-text"
                style={{ fontWeight: 600, marginTop: 0 }}
              >
                <p>{review.title}</p>
              </div>
              <div className="user-text">
                <p>{review.reviewText}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
