import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CompoNProps from './CompoNProps/CompoNProps';
// import ComposingCompo from './CompoNProps/ComposingCompo';
import ExtractingComponent from './CompoNProps/ExtractingComponent';

import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(<ExtractingComponent />, document.getElementById('root'));
