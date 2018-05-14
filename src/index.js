import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CompoNProps from './CompoNProps/CompoNProps';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(<CompoNProps />, document.getElementById('root'));
