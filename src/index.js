import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const name = 'Josh Perez';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "David",
  lastName: "Slim"
}

const greetingText = (
  <h1>Hello, {formatName(user)}</h1>
);


ReactDOM.render(greetingText,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();