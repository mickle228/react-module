import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import PostTittles from "../components/PostsContainer/PostTittles";
import {postService} from "../services/postService";


const PostsTittlesPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAllById(id).then(({data})=> setPosts(data))
    }, [id]);
    return (
        <div>
            <hr/>
            <h1>Posts Titles</h1>
            {posts.map(post=><PostTittles key={post.id} post={post}/>)}
            <hr/>
        </div>
    );
};

export default PostsTittlesPage;