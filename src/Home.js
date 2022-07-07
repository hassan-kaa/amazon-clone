import React from 'react'
import "./home.css"
import background from "./images/banner.jpg"
import Product from "./Product.js"
import AOS from "aos"
function Home( {products}) {
    AOS.init()
    return (
        <div className="home">
            <div className="home__container">
                <img src={background} className="home__image"/>
            </div>
            <div
            className="home__row" >
            {products?.map(element => (
            
            <Product  id={element.asin} title={element.title} price={element.price.current_price} image={element.thumbnail} rating={element.reviews.rating}/>
            
            ))
            }
            </div>
            
        </div>
    )
}

export default Home
