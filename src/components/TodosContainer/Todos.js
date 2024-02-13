import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {todoService} from "../../services/todoService";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todoService.getAll().then(({data})=> setTodos(data))
    }, []);
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;