import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "../Quotes/Quotes.css";
function Quotes() {
  return (
    <UncontrolledCarousel
      className="carousel"
      items={[
        {
          key: 1,
          src: "https://wallpaperaccess.com/full/3865569.jpg",
        },
        {
          key: 2,
          src: "https://cdn.lifehack.org/wp-content/uploads/2015/01/most-inspirational-quotes.jpeg",
        },
        {
          key: 3,
          src: "https://gruposaedal.com/wp-content/uploads/2022/02/200-Best-Life-Quotes-to-Live-By.jpeg",
        },
      ]}
    />
  );
}
export default Quotes;
