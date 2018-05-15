import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CompoNProps from './CompoNProps/CompoNProps';
import ComposingCompo from './CompoNProps/ComposingCompo';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(<ComposingCompo />, document.getElementById('root'));
