import React, { Component } from 'react';

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {props.date.toLocaleDateString()}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Mrs. Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

function ShowComment() {
    return (
        <div>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
        </div>
    );
}
class ExtractingComponent extends Component {
    render() {
        return (
            ShowComment()
        );
    }
}

export default ExtractingComponent;
