import React from "react";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="analysis">
      <div className="recent_products">
        <p>Recently Searched</p>
        <div className="recently-viewed-col">
          <img src="https://m.media-amazon.com/images/I/61RvZWYRt4L._SX679_.jpg" />
          <p>
            L’Oréal Paris Colour Riche Original Creamy, Hydrating Satin Lipstick
            with Argan Oil and Vitamin E, Fairest Nude , 1 Count
          </p>
          <img src="https://m.media-amazon.com/images/I/31jBSwNjTRL._SX300_SY300_QL70_FMwebp_.jpg" />
          <p>
            Maybelline Super Stay Vinyl Ink Longwear No-Budge Liquid Lipcolor
            Makeup, Highly Pigmented Color and Instant Shine, Captivated, Pink
            Lipstick, 0.14 fl oz, 1 Count
          </p>
        </div>
      </div>
      <div className="centre">
        <h1>Kowalski Analysis</h1>
        <div className="search_bar">
          <input type="text" placeholder="Product URL" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
export default Analysis;
