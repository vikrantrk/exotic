import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { configStore, history } from "./store/config";
import MainApp from "./mainApp";


const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
          
            <MainApp />
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;