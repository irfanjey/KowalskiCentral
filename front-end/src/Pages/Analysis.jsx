import React from 'react'
import './Analysis.css'

const Analysis = () => {
  return (
    <div className='analysis'>
        <div className='recent_products'>
            <p>Recently Searched</p>
            <div>
              
            </div>
        </div>
        <div className='search_bar'>
            <input type="text" placeholder='Product URL'/>
            <button>Search</button>
        </div>
    </div>
  )
}
export default Analysis
