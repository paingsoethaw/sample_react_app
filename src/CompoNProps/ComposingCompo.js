import React, { Component } from 'react';

function addYear(age) {
    return age + " Years"
}

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>Age: {addYear(props.age)} </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Welcome name="Sara" age="24" />
            <Welcome name="Cahal" age="24" />
            <Welcome name="Edite" age="24" />
        </div>
    );
}

class ComposingCompo extends Component {
    render() {
        return (
            App()
        );
    }
}

export default ComposingCompo;
