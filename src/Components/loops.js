import React from "react";
import "./Simple.css"
 export default class Loops extends React.Component{
    render(){
        const Fruits=["Apple","Mango","Orange","Papaya","Banana"];
        return(
            <div style={{backgroundColor:"lightblue", padding:"30px"}}>
            <h1>Fruits Lists</h1>
            <ul>
                {Fruits.map((item,index)=>{
                 <li>{item}</li>

    })}
                {/* <li>Apple</li>
                <li>Mango</li>
                <li>Orange</li>
               <li>Papaya</li>
                <li>Banana</li> */}
             </ul>
   
            </div>
        )
    }
    }