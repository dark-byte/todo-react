import React from 'react';

function Todo ({todos, todo, setTodos, key, text}){

    const delHandler = (e) =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return(
        <li className="todo">
            <label>{text}</label>
            <button className="delBtn" onClick={delHandler}><i className="fas fa-trash"></i></button>
        </li>

    );
}

export default Todo;