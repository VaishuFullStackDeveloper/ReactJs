import React from "react";
import "./Panal.css";

export default class Panal extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <h2>Movie List</h2>
        
        {this.props.movieArray.length === 0 ? (
      <></>
        ) : (
          <ul className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
                <div className="movie-info">
                  <strong>{movie.movieName}</strong> - <strong>{movie.Duration} min</strong> <br/> - Directed by <strong>{movie.movieDirector}</strong>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}