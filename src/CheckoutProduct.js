import React from 'react'
import {useStateValue} from "./StateProvider"
import "./checkoutProduct.css"

function CheckoutProduct({title,price,image,rating,id}) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
    dispatch({
        type:"REMOVE_FROM_BASKET",
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        },
    })
    }
    return (
        <div className="checkout__product">
            <div className="checkout__product__info">
                <p>{title}</p>

                <p className="checkout__product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkout__product__rating">
                   {Array(Math.floor(rating)).fill().map((_,index)=>(
                       <p>⭐</p>
                   ))}
                </div>
            </div>
                <img src={image} alt=""/>
                <button onClick={()=>{
                    
                    removeFromBasket()
                }}>Remove from Basket
                </button>
        </div>
    )
}

export default CheckoutProduct
