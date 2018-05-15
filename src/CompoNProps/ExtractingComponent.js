import React, { Component } from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

// function Avatar(props) {
//     return (
//         <img
//             className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }

function UserInfo(props) {
    return (
        <div className="UserInfo">
            {/* <Avatar user={props.user} /> */}
            <img
                className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />

            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comments = [
    {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Mrs. Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64',
        },
    },
    {
        date: new Date(),
        text: 'React is libary for building UI!',
        author: {
            name: 'Mrs. React',
            avatarUrl: 'http://placekitten.com/g/64/64',
        },
    }
];


class ExtractingComponent extends Component {
    render() {
        return (
            <div>
                <Comment
                    date={comments[0].date}
                    text={comments[0].text}
                    author={comments[0].author}
                />
                <Comment
                    date={comments[1].date}
                    text={comments[1].text}
                    author={comments[1].author}
                />
            </div>
        );
    }
}

export default ExtractingComponent;
