
import React from "react";
import "./ProfileImage.css";

export default class ProfileImage extends React.Component{
    render(){
        return(
            <div className="profile">
               <img src={"https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"} className="profile-img"/>
            </div>
        );
    };
};
export class ProfileImageTwo extends React.Component{
    render(){
        const defaultImg = 
        "https://i.pinimg.com/564x/16/61/80/16618092079747f124a7402dcd58d241.jpg"
        return(
            <div className="profile">
               <img src={defaultImg} className="profile-img"/>
            </div>
        )
    }     

}
export class ProfileImageThree extends React.Component{
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



