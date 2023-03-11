
import './App.css';
import React, { useState } from "react";

function App() {
  const [ newTodo, setNewTodo] = useState("");
  const [ todo, setTodo ] = useState([]);

  const addSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length === 0){
      return;
    }
    
    const todoItem = {
      text: newTodo,
      finished: false
    }
    
    setTodo([...todo, todoItem]);
    setNewTodo("");

  }
  
  const deleteTask = (delIndex) => {
    const filterTodo = todo.filter((todo, i) => {
      return i !== delIndex;
    });

    setTodo(filterTodo);
  }

  const toggleTaskFinished = (idx) => {
     const updateTodo = todo.map((todo, i) => {
      if (idx === i) {
        todo.finished = !todo.finished;
      }
      return todo;
     });

     setTodo(updateTodo);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        addSubmit(e);
      }}>
      
      <input onChange={(e) =>
        setNewTodo(e.target.value)} 
        type ="text"
        value = {newTodo}
        />

      <div>
        <button type='submit'>Add a Task</button>
      </div>
      </form>
        <hr />
      <div>
        <ul>
        {
          todo.map((todo, i) => {
            const todoArray = ["bold", "italic"];

            if(todo.finished) {
              todoArray.push("strike-through");
            }
            return (
              <div key={i}>
                <input onChange={ (e) => {
                  toggleTaskFinished(i)
                }} checked={todo.finished} type="checkbox" />
                  <span className={todoArray.join(" ")}> 
                    {todo.text}
                  </span>
                <button onClick={(e) => {
                  deleteTask(i);
              }}>Delete</button> 
              </div>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
