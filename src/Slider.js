import React,{useEffect} from 'react'
import Module from "./Module"
import "./slider.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom"
import Nav from "./Nav"
import AOS from "aos"
function Slider() {
    const [{user,slider,back},dispatch]=useStateValue()
    AOS.init()
    const fadeFunction =()=>{
        console.log(slider)
        return(slider? "fade-right" : "fade.left")
    }
    useEffect(() => {
     fadeFunction()}, [slider])
    return (
        <div data-aos={fadeFunction()}  
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" className="slider" onTouchEnd={(e)=>{
            e.preventDefault()
        }}>
            <div className="wrapper">
                {back? <div>
                        <Nav/>
                    </div> : 
                <div>
                <Link to={!user && "/sign-in"}>
                <div className="hello" >
                    <div className="icon">
                    <AccountCircleIcon/>
                    </div>
                    <h1>Hello,Sign in</h1>
               </div>
               </Link>
               <div className="menu">
                <Module title="Digital Content & Devices" text={[{name:"Amazon Music",options:[{title:"Stream Music",items:["Amazon Music unlimited","Amazon Music HD","Prime Music","Free Streaming Music","Podcasts","Web Music Player"]},{title:"Buy Music",items:["CDs and Vinyl","Download Store","Artist Merch store"]}]},
                {name:"Kindle E-readers & Books",options:[{title:"Kindle E-readers",items:["Kindle Kids Edition","Kindle","Kindle paperwhite","Kindle Oasis","Accesories","See All Kindle Readers"]},{title:"Kindle Store",items:["Kindle Books","KIndle Unlimited","Primary Reading"]}]},
                 {name:"Appstore for Android",options:[{title:"App Store for Android",items:["All Apps and Games","Games","Amazon Coind","Download Amazon Appstore","Amazon Apps","Your Apps and Subscriptions"]}]},
                ]}/>

<Module title="Digital Content & Devices" text={[{name:"Amazon Music",options:[{title:"Stream Music",items:["Amazon Music unlimited","Amazon Music HD","Prime Music","Free Streaming Music","Podcasts","Web Music Player"]},{title:"Buy Music",items:["CDs and Vinyl","Download Store","Artist Merch store"]}]},
                {name:"Kindle E-readers & Books",options:[{title:"Kindle E-readers",items:["Kindle Kids Edition","Kindle","Kindle paperwhite","Kindle Oasis","Accesories","See All Kindle Readers"]},{title:"Kindle Store",items:["Kindle Books","KIndle Unlimited","Primary Reading"]}]},
                 {name:"Appstore for Android",options:[{title:"App Store for Android",items:["All Apps and Games","Games","Amazon Coind","Download Amazon Appstore","Amazon Apps","Your Apps and Subscriptions"]}]},
                ]}/>

<Module title="Digital Content & Devices" text={[{name:"Amazon Music",options:[{title:"Stream Music",items:["Amazon Music unlimited","Amazon Music HD","Prime Music","Free Streaming Music","Podcasts","Web Music Player"]},{title:"Buy Music",items:["CDs and Vinyl","Download Store","Artist Merch store"]}]},
                {name:"Kindle E-readers & Books",options:[{title:"Kindle E-readers",items:["Kindle Kids Edition","Kindle","Kindle paperwhite","Kindle Oasis","Accesories","See All Kindle Readers"]},{title:"Kindle Store",items:["Kindle Books","KIndle Unlimited","Primary Reading"]}]},
                 {name:"Appstore for Android",options:[{title:"App Store for Android",items:["All Apps and Games","Games","Amazon Coind","Download Amazon Appstore","Amazon Apps","Your Apps and Subscriptions"]}]},
                ]}/>

<Module title="Digital Content & Devices" text={[{name:"Amazon Music",options:[{title:"Stream Music",items:["Amazon Music unlimited","Amazon Music HD","Prime Music","Free Streaming Music","Podcasts","Web Music Player"]},{title:"Buy Music",items:["CDs and Vinyl","Download Store","Artist Merch store"]}]},
                {name:"Kindle E-readers & Books",options:[{title:"Kindle E-readers",items:["Kindle Kids Edition","Kindle","Kindle paperwhite","Kindle Oasis","Accesories","See All Kindle Readers"]},{title:"Kindle Store",items:["Kindle Books","KIndle Unlimited","Primary Reading"]}]},
                 {name:"Appstore for Android",options:[{title:"App Store for Android",items:["All Apps and Games","Games","Amazon Coind","Download Amazon Appstore","Amazon Apps","Your Apps and Subscriptions"]}]},
                ]}/>

<Module title="Digital Content & Devices" text={[{name:"Amazon Music",options:[{title:"Stream Music",items:["Amazon Music unlimited","Amazon Music HD","Prime Music","Free Streaming Music","Podcasts","Web Music Player"]},{title:"Buy Music",items:["CDs and Vinyl","Download Store","Artist Merch store"]}]},
                {name:"Kindle E-readers & Books",options:[{title:"Kindle E-readers",items:["Kindle Kids Edition","Kindle","Kindle paperwhite","Kindle Oasis","Accesories","See All Kindle Readers"]},{title:"Kindle Store",items:["Kindle Books","KIndle Unlimited","Primary Reading"]}]},
                 {name:"Appstore for Android",options:[{title:"App Store for Android",items:["All Apps and Games","Games","Amazon Coind","Download Amazon Appstore","Amazon Apps","Your Apps and Subscriptions"]}]},
                ]}/>
                
            </div>
            </div>
}
            </div>
            <div className="close" onClick={(e)=>{
                e.preventDefault()
                dispatch({
                    type:"CLOSE_SLIDER"
                })
            }}>
                <CloseIcon style={
                    {color:"green[500]"}
                }/>
            </div>
            <div className="rest"  onClick={(e)=>{
            e.preventDefault()
            dispatch({
                type:"CLOSE_SLIDER"
            })
        }}></div>
        </div>
    )
}

export default Slider
