import React, {useState} from "react";
 import "./DynamicImage.css";
 export default DynamicImage(){
    const[selectedFruit,setSelectedFruit] = useState("apple");
    const fruitImages ={
        apple:"./Apple.webp",
        grapes:"https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg.webp",
        watermelon:"https://images.news18.com/ibnlive/uploads/2022/03/watermelon-16470020754x3.jpg",
    };
    const onSelectChange =(event)=>{
        console.log("onSelectChange");                                                                 
        setSelectedFruit(event.target.value);
    };
    return(
        <div className="container">
            <h1>Select a Fruits</h1>
            <select className="drop-down" onChange={onSelectChange}>
                <option value="Apple">Apple</option>
                <option value="watermelon">watermelon</option>
                <option value="Grapes">Grapes</option>
            </select>
            <h2>You select:[selectedFruit]</h2>
            <img 
            style={{width:"15vw", height:"20vh",margin:"50px"}}
            src={fruitImages[selectedFruit]}
            alt={selectedFruit}>
        </img>
        </div>
    );
};
