import React, { useState } from 'react';
import './Analysis.css';

const Analysis = () => {
  const [url, setUrl] = useState('');
  const [productInfo, setProductInfo] = useState(null);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSearchClick = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/findproductdeets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        setProductInfo(data);
        console.log('Product Data:', data);
      } else {
        console.error('Failed to fetch product data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='analysis'>
      <div className='recent_products'>
        <p>Recently Searched</p>
        <div>
          {/* Add your recently searched products display logic here */}
        </div>
      </div>
      <div className='search_bar'>
        <input
          type="text"
          placeholder='Paste Amazon URL to product page'
          value={url}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {productInfo && (
        <div className='product_info'>
          <h2>Product Information</h2>
          <pre>{JSON.stringify(productInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Analysis;
