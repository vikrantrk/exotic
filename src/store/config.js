import createSagaMiddleware from "redux-saga";
import mySaga from './../sagas/sagas';
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "../reducers/RootReducer";
export const history = createBrowserHistory();
const middleware = routerMiddleware(history);


const sagaMiddleware = createSagaMiddleware();

export const configStore = () => {
  const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware, sagaMiddleware)   
  );
  //Run Saga
  sagaMiddleware.run(mySaga);
  
  return store;
};
