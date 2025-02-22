import React from "react";
import "./Imdb.css";
import Header from "./Header";
import Panal from "./Panal";
import Form from "./Form";

export default class Imdb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         movieArray: [],
         showForm: false,
        }
    }
    // function show form
    openForm = () => {
       this.setState({ showForm: !this.state.showForm })
    };

    // function 
    addMovies = (movie) => {
        console.log("Added movie:",movie)
        this.setState((prev) => ({
                movieArray: [movie, ...prev.movieArray],
                showForm: false,
        }));
    };
    render() {
        return (
            <div className="movies-main-container">
                <Header openForm = {this.openForm} />
                {this.state.showForm? (
                      <Form addMovie={this.addMovies} />
                ):(
                <Panal movieArray={this.state.movieArray} />)
                }
                 
            </div>
        );
    }
}
