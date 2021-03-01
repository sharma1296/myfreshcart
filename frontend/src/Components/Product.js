import React from 'react'

import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className="product-container mx-3">
    <div className="pro_items">
        <span className="dis_section">
        <span>{product.discountPercentage}<span className="per_txt">%</span></span>
        <br/>
            off
        </span>
        <span className="food_type_sec"><span className="text-veg"></span></span>
        <div className="pro_detail">
        <Link to={`/product/${product._id}`}>
                <span className="cat-img"> 
                    <img className="product-image-photo" src={product.image} alt="mypic"/>
                </span>
                    <span className="clsgetname">{product.name}</span>
            </Link>
        </div>
     
            <div className="price_box">
             <span className="price">M.R.P <strike>{product.price}</strike></span>
            <span className="final_price">₹ 444.00</span>
            <span className="save_price">Save ₹ 41.00</span>
                 </div>
        <div className="cart_btn">
               <div className="cart_btn">
            <button type="button" title="ADD TO CART" className="toCart addtocartbtn" data-sku="490010164">
                <span className="txt_btn">Add to Cart</span>
                <span className="add_plus"></span>
            </button>
        </div>
          </div>
    </div>
</div>
  )
}

export default Product