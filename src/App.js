import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { configStore, history } from "./store/config";
import MainApp from "./mainApp";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';



const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider theme={theme} >
          <ConnectedRouter history={history}>
          
            <MainApp />
            
          </ConnectedRouter>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;