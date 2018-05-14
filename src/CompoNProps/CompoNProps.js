import React, { Component } from 'react';

function Welcome(props) {
  console.log(props);
  return (
    <h1> Hello, {props.name}!
    <p>(Nick Name:{props.nickName})</p>
    </h1>
  );
}
// function PersonalInfo(props) {
//   console.log(props);
//   return (
//     <p>
//       Father Name: {props.fatherName}
//       Mother Name {props.motherName}
//     </p>
//   );
// }

class CompoNProps extends Component {
  render() {
    return (
      <Welcome name="Sara" nickName="Sa" />
      // <PersonalInfo fatherName="David" motherName="Mary" />
    );
  }

}

export default CompoNProps;

// function Person(props) {
//   return (
//     <div className="person">
//       <h1>{props.name}</h1>
//       <p>Score: {props.score}</p>
//     </div>
//   );
// }

// var app = (
//   <div>
//     <Person name="David" score="12" />
//     <Person name="John" score="15" />
//   </div>
// );

// ReactDOM.render(app, document.querySelector("#app"));