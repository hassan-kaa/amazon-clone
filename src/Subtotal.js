import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from "./StateProvider"
import Product from "./Product"
function Subtotal() {
    const [{basket},dispatch]=useStateValue()
    const sum=function(){
        let s=0
        basket.forEach(element => {
            s+=parseFloat(element.price)
        })
        return s
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items) :
                    <strong>{`${sum()}$`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
            />
            <button> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
