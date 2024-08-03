import React, { useState } from 'react';
import './Analysis.css';

const Analysis = () => {
  const [productURL, setProductURL] = useState('');
  const [recentProducts, setRecentProducts] = useState([]);

  const handleSubmit = async () => {
    if (productURL.trim()) {
      let res = await fetch('http://localhost:3000/analyze_endpoint', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productURL: productURL }),
        credentials: "include",
      });

      if (res.ok) {
        // Example: Add the product URL to the list of recent products
        setRecentProducts([...recentProducts, productURL]);
        // Clear the input field
        setProductURL('');
      } else {
        console.error('Failed to submit the product URL');
      }
    }
  };

  return (
    <div className='analysis'>
<<<<<<< Updated upstream
        <div className='recent_products'>
            <p>Recently Searched</p>
            <div>
              
            </div>
        </div>
        <div className='search_bar'>
            <input type="text" placeholder='Paste Amazon URL to product page'/>
            <button>Search</button>
=======
      <div className='recent_products'>
        <p>Recently Searched</p>
        <div>
          {recentProducts.map((product, index) => (
            <p key={index}>{product}</p>
          ))}
>>>>>>> Stashed changes
        </div>
      </div>
      <div className='search_bar'>
        <input
          type='text'
          placeholder='Product URL'
          value={productURL}
          onChange={(e) => setProductURL(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Analysis;
