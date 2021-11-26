import React from 'react';
import Todo from './Todo';

function TodoList ({inputText, todos, setTodos}){
    return(
        <div className="todoCont">
            <ul className="todoList">
                {
                    todos.map((todo) =>{
                        return(
                            <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
                        );
                    })
                }
                
            </ul>
        </div>
    );
};

export default TodoList;