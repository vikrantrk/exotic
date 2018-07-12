import React from 'react';

import  RouterComponent  from './route/RouterComponent';
import HeaderContainerHOC from './containers/headerContainer';

const MainApp = () => {
  return (
      <div>
          <HeaderContainerHOC />
          <RouterComponent />
        </div>
    );
}

export default MainApp;