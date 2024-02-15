import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import Post from "./Post";

const Posts = ({id}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(id).then(({data})=> setPost(data));
    }, [id]);
    return (
        <div>
            {post&&<Post post={post}/>}
        </div>
    );
};

export default Posts;