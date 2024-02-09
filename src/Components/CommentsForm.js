import React from 'react';
import {useForm} from "react-hook-form";

import {commentService} from "../services/commentService";

const CommentsForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = (item) => {
        commentService.create(item).then(({data}) => setComments(prev=>[...prev, data]));
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export default CommentsForm;