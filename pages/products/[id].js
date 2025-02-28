/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../src/data.json";

export default function Product() {
  //We'll use useRouter() to grab the product ID dynamically.
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Router Query:", router.query); // Debugging
    if (id) {
      console.log("Product ID from URL:", id);
      const foundProduct = data.find((item) => item.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error("Product not found for ID:", id);
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

      {/* product generative page with json */}
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
            <p className="product-description">
              <p
                dangerouslySetInnerHTML={{
                  __html: product.description.replace(/\n/g, "<br/>"),
                }}
              />
            </p>
          </div>
          <div className="button-container">
            <button className="add-to-card-big">Add To Card</button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>



  );
}
