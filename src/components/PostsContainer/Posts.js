import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentService} from "../../services/commentService";

const Posts = () => {
    const [post, setPost] = useState(null)
    const {state:postId} = useLocation()

    useEffect(() => {
        commentService.getPostById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post ? (
                <div>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            ) : (
                <p>Завантаження...</p>
            )}
        </div>
    );
};

export default Posts;