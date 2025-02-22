import React from "react";
import "./Profile.css"

export class ProfileThree extends React.Component{
    render(){
        const defaultImg =
        "https://img.freepik.com/premium-photo/beautiful-butterfly-images-brighten-your-day_1199394-94530.jpg"
        return(
            <div className="profile">
             < img src={defaultImg} className="profile-img"/>
            </div>
        );
    }
} 