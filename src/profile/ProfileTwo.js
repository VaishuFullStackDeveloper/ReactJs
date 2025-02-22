import React from "react"
import "./Profile.css";
import ground from "../assets/ground.jpg";

export class ProfileTwo extends React.Component{

    render(){
        // const defaultImg = 
        // "https://i.pinimg.com/564x/16/61/80/16618092079747f124a7402dcd58d241.jpg"
        return(
            <div className="profile">
               <img src={ground} className="profile-img"/>
            </div>
        )
    }     

    }