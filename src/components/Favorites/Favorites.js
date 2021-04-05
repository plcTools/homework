import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div class='principal-favs'>
        <h2>Películas Favoritas</h2>
        <div className='grid-movies'>
          {this.props.movies.map((movie) => {
            return (
              <div key = {movie.id} className='cell-movie'>

                <Link to={`/movie/${movie.id}`}>
                     <img src={movie.Poster} width="100%" height="auto" alt={movie.title} />
                </Link>
                     <div>
                        <button onClick = { () => this.props.removeMovieFavorite({title: movie.title, id: movie.id}) }>Remove</button>
                    </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}



export default connect(mapStateToProps, { removeMovieFavorite }) (ConnectedList);
