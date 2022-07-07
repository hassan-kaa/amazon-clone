import React,{useState} from 'react';
import './header.css'
import logo from'./images/logo.png' 
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link,useHistory} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
function Header() {
    const history=useHistory()
    const [{basket,user},dispatch]=useStateValue()
    const handleAuthentification=()=>{
        if(user){
            auth.signOut()
        }
        else {
            history.push('/sign-in')
        }
    }
    const [inputValue,setInputValue]=useState("")
    return (
        <div className="theheader">
        <div className="header">
            <Link to="/">
        <img src={logo} className="header__logo"/>
        </Link>
        <div className="header__search">
            <select onChange={(e)=>{
        e.preventDefault();
       setInputValue(e.target.value)
    }} className="header__options" name="All" id="options">
                <option value="none" selected >
                    All
                </option>
                <option value="art">Art</option>
                <option value="clothes">Clothes</option>
                <option value="gift">gifts</option>
                <option value="technology">Technology</option>
                <option value="sport">Sport</option>
            </select>
            <input onChange={(e)=>{
        e.preventDefault();
       setInputValue(e.target.value)
    }} type="text" className="header__searchInput"/>
            <SearchIcon type="submit" onClick={(e)=>{
        e.preventDefault()
        dispatch({
            type:"SEARCH",
            item:inputValue,
        })
    }} className="header__searchIcon"/>
        </div>
        
        <div className="header__nav">

        <Link to ={!user &&  "/sign-in"}>
          <div onClick={handleAuthentification} className="header__option">
          <span className="header__optionLineOne">
           Hello Guest
       </span>
       <span className="header__optionLineTwo">
           {user ? "Sign Out" : "Sign In"}
       </span>
          </div>
          </Link>


          <div className="header__option">
       <span className="header__optionLineOne">
           Returns
       </span>
       <span className="header__optionLineTwo">
           & Orders
       </span>
          </div>


          <div className="header__option">
          <span className="header__optionLineOne">
           Your
       </span>
       <span className="header__optionLineTwo">
           Prime
       </span>
          </div>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__optionBasketCount">
              {basket.length}</span>
        </div>
        </Link>
        </div>
            <div  className="two">
            <ul className="navs">
            <li className="navOptions all"  onClick={(e)=>{
                    e.preventDefault()
                    dispatch({
                        type:"SLIDE"
                    })
                }}>
                <MenuIcon/>
                All
            </li>
                <li className="navOptions">Today's Deals</li>
                <li className="navOptions">Customer Service</li>
                <li className="navOptions">Gift Cards</li>
                <li className="navOptions">Sell</li>
                <li className="navOptions">Registry</li>
            </ul>
        </div>
        </div>
    
    )
}

export default Header
