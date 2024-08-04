import React from "react";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  let location = useLocation();
  let recentlySearched = location.state.data.recentlySearched;

  return (
    <div className="dashboard">
      <div className="recently_searched">
        <p>Recently Searched</p>
        <div>
          {recentlySearched.map((item) => (
            <React.Fragment key={item.id}>
              <img src={item.imgUrl} />
              <p>{item.title}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="searched_product">
        <p>Product Image</p>
        <img src="" alt="" />
        <div>
          <p>Image URL:</p>
          <p>Product Title:</p>
        </div>
      </div>
      <div className="product_analysis">
        <p>Analysis</p>
      </div>
      <div className="related_products">
        <div className="product1">
          <p>Product 1</p>
          <img src="" alt="" />
          <p></p>
        </div>
        <div className="product2">
          <p>Product 2</p>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
