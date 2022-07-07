import React,{useState} from 'react'
import logo from "./images/amazon-logo-.png"
import "./singIn.css"
import {useHistory,Link} from "react-router-dom"
import {auth} from "./firebase.js"
function SignIn() {
    const history=useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signin= (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if (auth) history.push('/')
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const createAccount=(e)=>{
        e.preventDefault()
        console.log(email,password)
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth)
            if(auth) history.push('/')
    }).catch((error)=>{
        alert(error.message)
    })
    }
    return (
        <div className="signIn">
            <Link to="/" >
                <img src={logo} alt=""/>
            </Link>
            
            <form action="" className="signIn__form">
            <h1>
                Sign-in
            </h1>
                <p classname="label">E-mail</p>
                <input className="email" type="text" value={email} onChange= {(e)=>{
                    e.preventDefault();
                    setEmail(e.target.value)
                }}/>


                <p classname="label">Password</p>

                <input classname="password" type="password" value={password} onChange= {(e)=>{
                    e.preventDefault();
                    setPassword(e.target.value)
                    console.log(password)
                }}/>
                <p className="forgotten">
                    forgot password ?
                </p>
                <button type="submit" className="submit" onClick={signin}>
                    Sign In 
                </button>
                <p className="lorem">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor asperiores,
                    repellat molestiae ea sapiente sit.
                </p>
                <button onClick={createAccount} className="submit create">
                   
                   Create your Amazon accout
                   
                </button>
            </form>
        </div>
    )
}

export default SignIn
