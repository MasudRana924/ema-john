import React from 'react';

import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock,star } = props.product
    
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>by {seller}</small></p>
                <p><small>only <span className="stock">{stock}</span>  left in stock - order very soon</small></p>
                <p><small>Price : {price}TK</small></p>
             
                <button className="btn"
                onClick={()=>props.cartHandle(props.product)}
                
                >Add To cart</button>
            </div>
        </div>
    );
};

export default Product;