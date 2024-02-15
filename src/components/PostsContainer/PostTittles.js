import React from 'react';
import {useNavigate} from "react-router-dom";

const PostTittles = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    return (
        <div>
            <div>{id}){title}</div>
            <button onClick={() => navigate(`/post-details/${id}`)}>posts of current user</button>
        </div>
    );
};

export default PostTittles;