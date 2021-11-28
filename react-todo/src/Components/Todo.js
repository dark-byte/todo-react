import React from 'react';

function Todo ({todos, todo, setTodos, text}){

    const delHandler = (e) =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const checkHandler = (e) =>{
        setTodos(todos.map((el)=>{
          if(el.id === todo.id){
              return{
                  ...el, checked: !todo.checked
              }
          }
          return el;  
        }))
    };

    return(
        <li className="todo">
            <label className={`${todo.checked?"strike" : ""}`}>{text}</label>
            <div>
                <button onClick={checkHandler} className={`${todo.checked ? "unChkBtn" : "chkBtn"}`}>
                    {todo.checked?< i class="fas fa-undo"></i> : <i class="fas fa-check"></i>}
                </button>
                <button className="delBtn" onClick={delHandler}><i className="fas fa-trash"></i></button>
            </div>
        </li>

    );
}

export default Todo;