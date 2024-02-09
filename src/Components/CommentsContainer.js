import React, {useEffect, useState} from 'react';

import CommentsForm from "./CommentsForm";
import {commentService} from "../services/commentService";
import Comments from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <div><CommentsForm setComments={setComments}/></div>
            <hr/>
            <div><Comments comments={comments}/></div>
        </div>
    );
};

export default CommentsContainer;