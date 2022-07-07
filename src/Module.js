import React from 'react'
import "./module.css"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStateValue} from "./StateProvider"
function Module({title,text}) {
    const [{},dispatch]=useStateValue()
    return (
        <div className="module">
                    <h1 className="title">{title}</h1>
                    <div className="list">
                        {text.map(element=>(
                            <div className="option" onClick={(e)=>{
                                e.preventDefault()
                                dispatch({
                                    type:"NAVIGATION",
                                    item:element.options,
                                })
                            }} >
                            <h1 className="text">
                                {element.name}
                            </h1>
                            <div className="icon">
                            <ChevronRightIcon/>
                            </div>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default Module
