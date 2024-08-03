import React, { useState } from "react";
import "./Analysis.css";
import { useNavigate } from "react-router-dom";

const Analysis = () => {
  const [url, setUrl] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSearchClick = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/findproductdeets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        setProductInfo(data);
        console.log("Product Data:", data);
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <input
            type="text"
            placeholder="Paste Amazon URL to product page"
            value={url}
            onChange={handleInputChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </div>
      {productInfo && (
        <div className="product_info">
          <h2>Product Information</h2>
          <pre>{JSON.stringify(productInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Analysis;
