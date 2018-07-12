import React from 'react';
import Header from './header';

import RouterModule from './routerModule';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const AppMain = () => {  
        return (
            <div>
                <div className="AAA">
                    <Header history = {history} />

                    <div className="text">
                    <RouterModule />
                    </div>
                </div>
            </div>
        );
}

export default AppMain;