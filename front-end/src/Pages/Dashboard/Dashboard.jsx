import React from "react";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const renderMarkdown = (markdownString) => {
  return (
    <ReactMarkdown children={markdownString} remarkPlugins={[remarkGfm]} />
  );
};

const Dashboard = () => {
  let location = useLocation();
  let recentlySearched = location.state.recentlySearched;
  let productInfo = location.state.data.product_info;
  let openAIResponse = location.state.data.openai_response;

  return (
    <div className="dashboard">
      <div className="recently_searched">
        <h2>Recently Searched</h2>
        <div>
          {recentlySearched.map((item) => (
            <div key={item.id} className="recently_searched_item">
              <img src={item.imgUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="searched_product">
        <h2>Product Image</h2>
        <a href={productInfo.request_metadata.amazon_url}>
          <img
            src={productInfo.product.images[0].link}
            alt="Product"
            className="product_image"
          />
        </a>
        <div className="product_details">
          <p>
            Product Title: {productInfo.product.title_excluding_variant_name}
          </p>
        </div>
      </div>
      <div className="product_analysis">
        <h2>Analysis</h2>
        <div className="markdown_content">{renderMarkdown(openAIResponse)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
