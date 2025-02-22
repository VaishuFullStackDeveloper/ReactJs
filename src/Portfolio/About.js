import React from "react";
import "./Header.css"

export default class About extends React.Component {
    render() {
        return (
            <div className="Container-two">
                <div className="logo"><img className="img" src="https://img.freepik.com/free-photo/business-woman-sitting-table-gray-background-3d-rendering_1142-55422.jpg"height="80%"></img>
                <div><a></a></div>
                </div>
                
                <div className="Info">
     <div className="my-name"style={{fontSize:"40px",color:"pink",marginTop:"80px"}}> Vaishali Dewase</div>
        <div className="name" style={{ fontSize:"60px",color:"white", marginTop:"20px"}}>Full Stack Developer</div>
        
             <p style={{color:"white"}}>Hi, I’m Vaishali I’m a passionate full-stack developer with a
              keen interest in building dynamic, user-friendly web applications.
              My journey in coding began with curiosity and has grown into a
              dedicated pursuit of creating impactful digital experiences.
            </p>
                </div> 
        </div>

     );
    };
};

