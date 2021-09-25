import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Product from '../../Products/Product';

const Header = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // const[products,setProducts]=useState([])
    // const[displayItems,setDisplayItems]=useState([])
    
    // useEffect(() => {
    //     fetch('./products.JSON')
    //         .then(res => res.json())
    //         .then(data => {
    //             setproducts(data)
    //             setDisplayItems(data)
            
    //         })
    // }, [])
    // const searchHandle=event=>{
    //     const searchText=event.target.value 
    //     const matchedItems=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
    //     setDisplayItems(matchedItems)
    // }
    return (
        <div className="header-container">
            <div className="image-container">
                <img src={logo} alt="" />
            </div>
            <div className="nav-container">
                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact Us</a>
                </nav>
            </div>
            <div className="search-container">
                <input  type="text" placeholder="search a product here" /> <span className="cart-icon">{cartIcon}</span>
               
            </div>

        </div>
    );
};

export default Header;