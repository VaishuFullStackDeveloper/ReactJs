import React from "react";
import "./Simple.css"
 export default class Simple extends React.Component{
render(){
    return(
        <div
style={{ backgroundColor:"lightgrey", padding:"20px"}}>
            <h1>{"Hello World"}</h1>
            <p>{"Welcome to React"}</p>
        </div>
    )
}
}