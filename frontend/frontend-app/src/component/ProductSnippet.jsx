import React from 'react';
import '../component-css/Product-snippet.css'
import xmarkimg from '../photo/xmark-solid.svg'
export default function Product_snippet({ product, handleRemove }) {
  return (
    <>
    <div className='snippet-container'>
        <img className='snippet-product-img' src={product.image} alt="logo" />
        <div className='text-snippet-container'>
        <img className='xmark-img' src={xmarkimg} alt="logo" onClick={()=> handleRemove(product.product)} />
        <p className='snippet-name'>{product.name}</p>
        <p className='snippet-short-detail'>{product.about}</p>
        <div className='inner-snippet-container'>
          <p className='snippet-product-size'>SIZE: {product.size}</p>
          <p className='qunatity'>QTY: {product.quantity}</p>
        </div>
        <p className='snippet-product_price'>{product.price}<span className='discount'>  ({product.discount}% OFF)</span></p>
        <p className='tax'>inclusive of all taxes</p>
        </div>
    </div> 
    </>
  )
}
