import React from "react";
import "./Simple.css"
 export default class Conditional extends React.Component{
render(){
    let greeting=" Hello World!"
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
     const seconds = date.getSeconds();
    if (hours<12){
        greeting= "Good Morning";
    }else if(hours>=12&& hours<17){
        greeting= "Good Afternoon";
}else if(hours>=12&& hours<17){
    greeting= "Good Night";
} 
    return(
        <div
        style={{ backgroundColor:"lightgrey", padding:"20px"}}>
    
        <h1>{greeting}</h1>
            <p>The current time is{hours}:{minutes<10 ?`0$(minutes)`:minutes}:{seconds}</p>
        </div>
    );
};
};