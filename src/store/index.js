import { createStore, applyMiddleware } from "redux";//importa los metodos para crear la store y el middleware
import rootReducer from "../reducers/index";
import thunk from "redux-thunk"; /* //!investigar sobre esto */

//import { createStore } from "redux";


/*
* el middleware cumple la funcion de retener un pedido asincrono, por ejemplo a una API
* si esta se demora en responder la aplicacion sigue funcionando y el Mddleware se encarga de
* renderizarlo cuando esta listo
*/

const store = createStore(//*crea la store y anida al reducer y al middleware importdos arriba
  rootReducer,
  //la siguiente linea es elparamatro para la devlopers tools de redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //modulo para el middleware, es para paedidos asincronos, ej: fetch a APIS
  applyMiddleware(thunk)
);

export default store; //exporta la store para ser usada en todo los componentes
