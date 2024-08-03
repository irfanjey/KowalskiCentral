import React from "react";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className='recently_searched'>
          <p>Recently Searched</p>
          <div>
              
          </div>
        </div>
        <div className='searched_product'>
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
  )
}
export default Dashboard
