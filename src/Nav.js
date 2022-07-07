import React from 'react'
import {useStateValue} from "./StateProvider"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./nav.css"
function Nav() {
    const [{nav},dispatch]=useStateValue()
    return (
        <div className="nav">
            <div className="toMenu" onClick={(e)=>{
                                e.preventDefault()
                                dispatch({
                                    type:"BACK",
                                })
                            }}>
                <ArrowBackIcon/>
                <h2>MAIN MENU</h2>
            </div>
            <div className="list">
            {nav.map(element=>(
                 <div>
                <h1 className="title">
                    {element.title}
                </h1>
                {element.items?.map(item=>(
                    <div className="option">
                        <h1 className="text">
                            {item}
                        </h1>
                    </div>
                ))}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Nav
