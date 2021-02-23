
/*//! este es el archivo de entrada de la aplicacioin */


import React from 'react';/* importa el metodo React de React */
import ReactDOM from 'react-dom';/* importa el metodo que hace las comparacion del DOM */

import './index.css'; /* importa estilos */
import App from './App'; /* importa el elemnto para ser usado */

import * as serviceWorker from './serviceWorker'; /* este es un elmento para usar la app offline, no es necesario */

import { BrowserRouter } from 'react-router-dom';/* importa el metodo que maneja las rutas de react */
import { Provider } from "react-redux";/*//! importa el metodo que maneja la store REDUX*/

import store from "./store/index";/* imoprta la store para manejar las acciones */

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
//TODO:/* el metodo Provider hace que la store este disponible para cualquier componente anidado en connect()  */
//TODO:/* BrowsreRouter maneja la rutas de react que estan asignadas en App.js*/






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
