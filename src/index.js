import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function greetingText(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger</h1>
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function printElement(element) {
  return element;
}

const user = {
  firstName: "David",
  lastName: "Slim"
}
// const user = "";

/////****React elements - JSX****////
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

/////****React elements - Babel****////
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

/////****React elements - Simplified Structure****////
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, World!'
//   }
// };

ReactDOM.render(element,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();