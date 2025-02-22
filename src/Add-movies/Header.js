import React from "react";
import "./Header.css"
import AddMovies from "./AddMovies";
import logo from "./assets/imdb logo.png"

export default class Header extends React.Component {
    render(){
        return( 
            <div className="header">
         <img src={logo}></img>

                <AddMovies openForm={this.props.openForm}/>
            </div>
        )
    }
}