import React, {useEffect,useState} from "react"
import './App.css';
import "./Header.js"
import "./Home"
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout'
import SignIn from "./SignIn"
import {auth} from "./firebase"
import AOS from "aos"
import {BrowserRouter as Router , Switch,Route} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import Slider from "./Slider"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
function App() {
  AOS.init()
  const targetElement=<Slider/>
  const [counter,setCounter]=useState(0)
  const [{basket,user,searchItem,slider},dispatch]=useStateValue()
  const [products, setProducts] = useState([]);
  const authFunction = ()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is just >>>>",authUser)
      if(authUser){
        //the user just logged in / was logged in  
        dispatch( 
          {
            type:"SET_USER",
            user:authUser
          }
        )
      }
      else{
        //the user is logged out 
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  }
  

const getProducts = async ()=>{
   const response = await fetch(`https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${searchItem}&country=US&category=aps`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f48c1c827dmshf06890a588f5861p18639ejsn25a061ef446f",
		"x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
	}
})
const data = await response.json()
console.log(data.products)
setProducts(data.products)
setCounter(counter+1)
}
useEffect(() => {
  authFunction()
  },[])
  useEffect(() => {
    getProducts()
  }, [searchItem])
  useEffect(()=>{
    slider ?
    disableBodyScroll(targetElement)
    : clearAllBodyScrollLocks(targetElement)
  },[slider])
  return (
    <Router>
    <div className="App">
   
      <Switch>
        <Route path="/checkout" exact>
        <Header/>
          <Checkout/>
        </Route>
         <Route  path="/" exact>
          {
            slider ? <div>
              {targetElement}
              <Header/>
            <Home products={products} />
            </div>
            : <div>
            <Header/>
          <Home products={products} />
            </div>}
         </Route>
         <Route path="/sign-in" exact>
            <SignIn/>
         </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
