import React from 'react'
import "../css/component css/ProductCard.css"
export default function ProductCard(props) {
  return (
    <div className='product-card'>
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="product-card-row">
            <div className="price-box">
                <h4>₹ {props.price}/-</h4>
                <p>Price</p>
            </div>
            <div className="dimension-box">
                <h4>{props.width}(W) X {props.height}(H)</h4>
                <p>Size (in Inch)</p>
            </div>
        </div>
            <a href="tel:8742920558" className="btn-a flex-btn link-a call-btn">Call Us</a>
            <a href="https://wa.me/918742920558" className="btn-a flex-btn link-a whatsapp-btn">WhatsApp Us</a>
    </div>
  )
}
