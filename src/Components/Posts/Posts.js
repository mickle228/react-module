import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/postService";
import PostDetails from "../PostDetails/PostDetails";
import style from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        postService.getAll()
            .then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
    }
    return (
        <div className={style.Posts}>
            <div>
                {posts.map(post=> <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;