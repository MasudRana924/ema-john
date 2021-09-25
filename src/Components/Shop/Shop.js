import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const[cart,setCart]=useState([])
   
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data =>
                setProducts(data)
             
                

             )
    }, [])

    const cartHandle=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }

    return (
        <div>
           <div className="cart-container">
                    <h2>Order Summary </h2>
                    <Cart cart={cart}
                    ></Cart>
                </div>

            <div className="shop-container">
                <div className="product-container">
                    {products.map(product => <Product
                        key={product.key}
                        product={product}
                        cartHandle={cartHandle}
                    >

                    </Product>)}
                </div>
                

            </div>
        </div>
    );
};

export default Shop;