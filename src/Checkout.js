import React from 'react'
import "./checkout.css"
import ad from "./images/ad.jpg"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"
function Checkout() {
    const [{basket},dispatch]=useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src={ad} alt="" className="checkout__ad"/>
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                </div>
                <div className="checkout__items">
                    {basket.map(item=>(
                        <CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>


                    )
                        
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <h2>You know what heee</h2>
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
