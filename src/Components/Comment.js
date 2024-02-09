import React from 'react';

const Comment = ({comment}) => {
    const {id, name, body} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Comment;