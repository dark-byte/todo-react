import React from 'react';

function Form ({inputText, setInputText, todos, setTodos}){

    const inputTextHandler = (e) =>{
        e.preventDefault();
        setInputText(e.target.value);
    };

    const addBtnOnclick = (e) =>{
        e.preventDefault();
        if (inputText) {
            setTodos([...todos, {text: inputText, id: Math.random() * 1000}]);
        } else{
            console.error("Todo cannot be empty");
            alert("Error!\nTodo cannot be empty!")
        }
        setInputText("");
    };

    return(
        <form className="form">
            <input onChange={inputTextHandler} className="input" 
                value={inputText} placeholder="Enter Your To-do">
            </input>
            <button onClick={addBtnOnclick} className="add-btn">
                add
            </button>
        </form>
    );
};
export default Form;