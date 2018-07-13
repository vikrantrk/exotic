import React from 'react';

import  RouterComponent  from './route/RouterComponent';
import HeaderContainerHOC from './containers/headerContainer';
import CssBaseline from '@material-ui/core/CssBaseline';

const MainApp = () => {
  return (
      <div>
          <CssBaseline />
          <HeaderContainerHOC />
          <RouterComponent />
        </div>
    );
}

export default MainApp;