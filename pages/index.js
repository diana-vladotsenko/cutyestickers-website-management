import { useEffect, useState } from "react";
import Head from "next/head";
import data from "../src/data.json";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import ProductsList from "../components/ProductsList";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
      <Head>
        <title>CutyeStickers</title>
      </Head>
      <ContactInfo />
      <Header />
      <Introduction />
      <ProductsList />
      <AboutSection />
      <Footer />
    </>
  );
}
