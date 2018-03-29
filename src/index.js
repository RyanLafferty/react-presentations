import React from 'react';
import ReactDOM from 'react-dom';
import ReactPresentation from './screens/ReactPresentation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactPresentation />, document.getElementById('root'));
registerServiceWorker();
