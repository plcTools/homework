

//este es el objeto que se va a guradar el store,  se inicializan la propiedades
const initialState = {
    movies: [], //listado de pelis Fav
    moviesLoaded: [], //pelicuals que vienne de la api
    movieDetail: {}//detalles de la pelicula
  };


  /* //ACA DEBAJO SE MANEJA EL RESULTADO DE LAS 'ACTIONS' DEPENDIENDO DE
   LA ACCION QUE SE LLAMO, QUE VALOR AÑIDA AL OBJETO DE LA STORE */

  function rootReducer(state = initialState, action) {

/* //  TODO: aca se puede hacer un switch
       !no olvidarse el default: return state(si no se cumple ninguna condicion) */

    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state, //!no olvidarse usar el spread opertaor para que no pise los valores anteriores
          movies: state.movies.concat(action.payload)//concatena (dos arrays) el array que llega del payload y el nuevo estado
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if (action.type === "REMOVE_MOVIE_FAVORITE"){
      return{
        ...state,
        movies: state.movies.filter( movie => movie.id !== action.payload.id)
      }
    }

    if (action.type === 'GET_MOVIE_DETAILS'){
return{
  ...state,
      movieDetail: action.payload
}


    }
    return state;//! no olvidarse retornar el estado si no se cumple ninguna condicion
  }
  
  export default rootReducer; // se exporta para que este disponible en la store y la maneje