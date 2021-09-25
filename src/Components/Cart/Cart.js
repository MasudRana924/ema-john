import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props

    let total = 0

    for (const product of cart) {

        total = total + product.price
    }
    const delivery = total > 0 ? 15 : 0
    const tax = (total + delivery) * 0.05

    return (
        <div className="cart">
            <h3>Total Order {props.cart.length} </h3>
            <span className="span">Delivery Charge : {delivery}</span> <br />
            <span className="span2">Tax : {tax.toFixed(2)}</span>
            <p>Total : {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;