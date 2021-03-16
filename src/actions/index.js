
/* estas son las acciones que se van a realizar cuando un componente
envie la peticion, despues se envia a la store y que se va a encargar
de actualizar el objeto */


export function addMovieFavorite(payload) {//solo envia el parametro del  payload y el type para que la store lo actulice
  return { 
    type: "ADD_MOVIE_FAVORITE", 
    payload 
  };
}


export function removeMovieFavorite(payload){//solo envia el parametro del  payload y el type para que la store lo actulice
  return{
    type: 'REMOVE_MOVIE_FAVORITE', 
    payload
  };
}

export function getMovies(titulo) {//recibe el titulo y hace el pedido de info a la Api y se la pasa como payload a la store
  return function (dispatch) {
    return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(id){ //recibe el id de la peli
//recibe el id y hace el pedido de info a la Api y se la pasa como payload a la store
 

return function(dispatch) { //recibe la funcion dispatch(action)


  return fetch("https://www.omdbapi.com/?apikey=20dac387&i=" + id)
  .then(response => response.json())
  .then(json => {
    dispatch({ type: "GET_MOVIE_DETAILS", payload: json });
    
  });
};
}
