import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    // const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            {/*<button onClick={() => navigate('posts', {state: {comment}})}>getPost</button>*/}
            <Link to={'/posts'} state={postId}>getPost</Link>
        </div>
    );
};

export default Comment;