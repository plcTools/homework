import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }

  render() {
    if (!this.props.movie.Title) return <h1>Cargando...</h1>;

    const { Title, Year, Director, Genre, Runtime, Poster } = this.props.movie;
    return (
      <div className="movie-detail">
        <div>{Title}</div>
        <div>{Year}</div>
        <div>{Director}</div>
        <div>{Genre}</div>
        <div>{Runtime}</div>
        <div>
          <img src={Poster} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("estado", state);
  return {
    movie: state.movieDetail,
    /* //cambia la propiedad movie del objeto global
          la propiedad del state movieDetail, el state viene del reducers,
           que es el encargado de ir asignando sus propiedades */
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
