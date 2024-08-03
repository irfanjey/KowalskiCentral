import React from 'react'
import './Analysis.css'

const Analysis = () => {
  return (
    <div className='analysis'>
        <div className='search_bar'>
            <input type="text" placeholder='Paste Amazon URL to product page'/>
            <button>Search</button>
        </div>
    </div>
  )
}
export default Analysis
