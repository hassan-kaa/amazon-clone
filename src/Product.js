import React from 'react'
import "./product.css"
import  {useStateValue} from "./StateProvider"
import AOS from "aos"
function Product({title,price,image,rating,id}) {
const [basket,dispatch]=useStateValue();
    const addToBasket=()=>{
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
    AOS.init()
    return (
        <div data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="0"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
         className="product">
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                   {Array(Math.floor(rating)).fill().map((_,index)=>(
                       <p>⭐</p>
                   ))}
                </div>
            </div>
                <img src={image} alt=""/>
                <button onClick={()=>{
                    
                    addToBasket()
                }}>Add to Basket
                </button>
        </div>
    )
}

export default Product;
