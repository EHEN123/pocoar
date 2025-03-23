import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Util from "./section/Util.js";
import Visual from "./section/visual/Visual.js";
import Aboutus from "./section/Aboutus.js"
import Product from "./section/product/Product.js"
import Form from "./section/form/Form.js"
import Review from "./section/Review.js"
import Footer from "./section/Footer.js"


export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });

    window.addEventListener("scroll", () => {
      AOS.refresh(); 
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div style={{overflow: "hidden"}}>
      <Util />
      <Visual />
      <Aboutus />
      <Product />
      <Form />
      <Review />
      <Footer />
    </div>
  );
}