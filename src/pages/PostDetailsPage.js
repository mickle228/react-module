import React from 'react';
import {useParams} from "react-router-dom";

import Posts from "../components/PostsContainer/Posts";
import Comments from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Post Details</h1>
            <Posts id={id}/>
            <hr/>
            <h1>Comments</h1>
            <Comments id={id}/>
        </div>
    );
};

export default PostDetailsPage;