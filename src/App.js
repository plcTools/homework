import React from "react";/* importa la libreria de React */
import { Route } from "react-router-dom"; /* importa el metodo Route de React */


import Favorites from "./components/Favorites/Favorites";/* importa el elemento para asignarle la ruta */
import Buscador from "./components/Buscador/Buscador";/* importa el elemento para asignarle la ruta */
import NavBar from "./components/NavBar/NavBar";/* importa el elemento para asignarle la ruta */
import Movie from "./components/Movie/Movie";/* importa el elemento para asignarle la ruta */

function App() {
  return (
      <React.Fragment> {/* esto se pone para envolver todoa la app, en react se deve renderizar un solo elemento del elemento tambien se puede usar <> y </> */}
          <NavBar /> {/* renderiza el elemento navBar, importado arriba, no lleva ruta porque se muestra en todas las paginas */}
          <Route exact path="/" component={Buscador} />{/* renderiza el elemento Buscador importado y le asigna una ruta */}
          <Route path="/favs" component={Favorites} />{/* renderiza el elemento Buscador importado y le asigna una ruta */}
          <Route path="/movie/:id" component={Movie} />{/* renderiza el elemento Buscador importado y le asigna una ruta dinamica para usar un id */}
      </React.Fragment>
  );
}

export default App; /* exporta la app para ser usada en el punto de entrada de la aplicacion */
