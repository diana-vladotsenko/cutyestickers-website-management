/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import data from "../src/data.json"; 

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data); // Load data into state
  }, []);

  return (
    <>
      <Head>
        <title>CutyeStickers</title>
        <meta name="description" content="CutyeStickers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pink_logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <div>
        <div className="contact-basket-container">
          <p className="mail-container">
            <Link className="mail" href="mailto:cutyestickers@gmail.com">
              cutyestickers@gmail.com
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

        <header className="header">
          <div className="logo">
            <Link href="/" className="logo-link">
              <img className="logo-img" src="/images/logo.jpg" alt="logo" />
              <p>CutyeStickers</p>
            </Link>
          </div>
          <ul id="nav" className="nav">
            <li>
              <Link href="/" className="tapped-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#products" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link href="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contacts" className="nav-link">
                Contacts
              </Link>
            </li>
          </ul>
        </header>

        <div className="introduction-section" id="home">
          <div className="heading-text">
            <h1 className="h1">
              <strong>Handmade Digital Stickers</strong>
              <span style={{ fontWeight: "normal" }}> Shop for</span>
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#DCC1FF",
                  fontWeight: "normal",
                }}
              >
                Every
              </span>
              <span style={{ fontWeight: "normal" }}> Occasion!</span>
            </h1>
            <p className="undertext">
              Discover unique, handcrafted digital stickers designed to brighten
              your day and add personality to everything you love. From planners
              to gifts, our stickers make every moment special.
            </p>

            <div className="introduction-buttons">
              <button id="see-products" className="button-see-products">
                <Link className="nav-link-button" href="/#products">
                  See Products
                  <i className="bi-arrow-up-right"></i>
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt="Arrow Up Right Icon"
                    className="bi-arrow-up-right"
                  />
                </Link>
              </button>
              <Link
                href="https://cutyestickers.etsy.com"
                className="link-etsy-shop"
                target="_blank"
              >
                Visit Etsy Shop
              </Link>
            </div>
          </div>
          <img
            src="/images/elipse_introduction_right.svg"
            alt="elipse-decoration"
            className="elipse-1"
          />
          <img
            src="/images/elipse_introduction_left.svg"
            alt="elipse-decoration"
            className="elipse-2"
          />
          <img
            src="/images/pink_logo.jpg"
            alt="logo-pink"
            className="introduction-image"
          />
        </div>

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
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/potato_set.webp"
                  alt="potato-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Potato Christmas Set</p>
                      <p className="card-text">7 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/1"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/coffee_set.jpg"
                  alt="coffee-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Coffee Set</p>
                      <p className="card-text">12 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/2"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/octopus.avif"
                  alt="octopus"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Octopus</p>
                      <p className="card-text">1 PNG File</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,20€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/3"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/selfcare.jpg"
                  alt="selfcare-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Self Care Set</p>
                      <p className="card-text">20 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">2,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/4"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-line-2">
            <p style={{ textAlign: "center", marginTop:"40px"}} className="undertext">
              There would be more products...
            </p>
          </div>
        </div>

        <div className="about-section" id="about">
          <div className="heading2-text">
            <h2 className="h2">About</h2>
          </div>
          <div className="about-container">
            <div className="paragraphs-container">
              <p style={{ fontWeight: 300 }} className="about-text">
                Hi there! I&apos;m Diana, a 22-year-old creative soul passionate
                about design and all things cute. Welcome to my digital sticker
                shop!
              </p>
              <p style={{ fontWeight: 200 }} className="about-text">
                I started this journey to share my love for art and creativity
                with people like you who enjoy adding a personal, playful touch
                to their lives. Each sticker in my collection is thoughtfully
                designed to bring a little bit of joy and inspiration to your
                day.
              </p>
              <p style={{ color: "#8B8B8B" }} className="about-text">
                Whether you&apos;re looking to decorate your planner, style your
                laptop, or make a gift extra special, my stickers are here to
                help you express yourself in unique and fun ways. Thank you for
                supporting my small business and being a part of my creative
                journey!
              </p>
              <p style={{ fontWeight: 300 }} className="about-text">
                ps. i made this website from scratch. Hope you are enjoying it!
              </p>
            </div>
            <div className="image-container">
              <img
                src="/images/elipse_about.svg"
                alt="elipse-decoration"
                className="elipse-4"
              />
              <img src="/images/me.jpg" alt="me" className="image-of-me" />
              <img
                src="/images/line_about.svg"
                alt="elipse-decoration"
                className="line-1"
              />
            </div>
          </div>
        </div>

        <div className="footer" id="contacts">
          <div className="logo">
            <Link href="/" className="logo-link">
              <img className="logo-img" src="/images/logo.jpg" alt="logo" />
              <p>CutyeStickers</p>
            </Link>
          </div>
          <div className="contact-section">
            <div className="contact-container">
              <p className="heading-info">Contact Me!</p>
              <div className="time-mail-container">
                <p style={{ fontSize: "22px", color: "#8B8B8B" }}>
                  E-S 12:00 AM - 20:00 PM (Estonian Time, UTC+2)
                </p>
                <div className="mail-footer">
                  <Link
                    href="mailto:cutyestickers@gmail.com"
                    style={{
                      fontSize: "22px",
                      color: "black",
                      textDecoration: "none",
                    }}
                    className="mail-text-footer"
                  >
                    <img
                      src="/icons/mail.svg"
                      alt="mail-icon"
                      className="mail-icon"
                    />
                    cutyestickers@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="social-media-container">
              <p className="heading-info">Social Media</p>
              <div className="social-media-links">
                <Link
                  href="https://www.instagram.com/cutyestickers/?igsh=MWJqOXVvcXdiNWVkNA%3D%3D"
                  target="_blank"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    className="social-media-icon"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@cutyestickers?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7441492660857013793"
                  target="_blank"
                >
                  <img
                    src="/icons/tiktok.svg"
                    alt="tiktok"
                    className="social-media-icon"
                  />
                </Link>
                <Link
                  href="https://www.etsy.com/shop/cutyestickers/?etsrc=sdt"
                  target="_blank"
                >
                  <img
                    src="/icons/etsy.svg"
                    alt="etsy"
                    className="social-media-icon"
                  />
                </Link>
              </div>
            </div>
            <div className="information-container">
              <p className="heading-info">Information</p>
              <ul className="info-links">
                <li>
                  <Link href="/" className="info-underlined-links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="info-underlined-links">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="info-underlined-links">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contacts" className="info-underlined-links">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="information-container">
              <p className="heading-info">Helpful Links</p>
              <ul className="info-links">
                <li>
                  <Link
                    href="/privacy_policy"
                    className="info-underlined-links"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms_and_cookies"
                    className="info-underlined-links"
                  >
                    Terms & Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright ©2025 CutyeStickers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

// function generativePage() {
//   const nameOfProduct = document.getElementById("NameOfProduct");
//   const price = document.getElementById("price");
//   const description = document.getElementById("productDescription");

//   jsonData = JSON.parse(data);
//   for (let i = 0; i < jsonData.length; i++) {
//     console.log(jsonData[i]);
//   }
//
