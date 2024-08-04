import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Analysis.css";

const Analysis = () => {
  const [url, setUrl] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [openaiResponse, setOpenaiResponse] = useState("");
  const [recentlySearched, setRecentlySearched] = useState([
    {
      imgUrl: "https://m.media-amazon.com/images/I/71nZXovINXL._SX679_.jpg",
      title: "Maybelline Super Stay Vinyl Ink Longwear No-Budge Liquid Lipcolor",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/61RvZWYRt4L._SX679_.jpg",
      title: "L’Oréal Paris Colour Riche Original Creamy",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/81X4xNzKHyL._AC_SX679_.jpg",
      title: "Sharpie Permanent Markers, Fine Point, Assorted Colours",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/715MyaLxCdL._AC_SX679_.jpg",
      title: "Maybelline New York Fit Me Matte + Poreless Foundation Makeup, Ultra-Lightweight Formula Controls Shine",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/I/61XDmzkDIYL._SL1500_.jpg",
      title: "Ralph Lauren - Polo Blue - Parfum - Men's Cologne - Aquatic & Fresh - With Citrus, Oakwood, and Vetiver - Intense Fragrance",
    }
  ]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {}, []);

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
        setLoading(true);
        const data = await response.json();
        console.log(data);
        setProductInfo(data.product_info);
        setOpenaiResponse(data.openai_response);
        console.log("Product Data:", data);
        navigate("/analysis", {
          state: { data: data, recentlySearched },
        });
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="recently_searched">
        <h2>Recently Searched</h2>
        <div>
          {recentlySearched.map((item, index) => (
            <div key={index} className="recently_searched_item">
              <img src={item.imgUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
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
          <button onClick={handleSearchClick}>
            {loading ? "Loading..." : "Search"}
          </button>
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
