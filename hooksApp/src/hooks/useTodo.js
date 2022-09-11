import { todoReducer } from "../08-useReducer/TodoReducer";
import { useEffect, useReducer, useState } from "react";

// get data from persistence
const init = () => JSON.parse(localStorage.getItem('todosList')) || [];

// actions:
const addAction         = { type: "[payload = todo] add a new TO-DO" };
const doneByIdAction    = { type: "marks as done a todo by id" };
const deleteByIdAction  = { type: "delete a todo by id" };

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [sequence, setSequence] = useState(todos.length /* mock, it should get sequence from backend */);  

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    sequence,
    add: todo => {
      setSequence(sequence => sequence+1);
      dispatch({...addAction, payload: todo})
    },
    doneById:   id => dispatch({...doneByIdAction, payload: id}),
    deleteById: id => dispatch({...deleteByIdAction, payload: id}),
    completed:  todos.filter(todo=>todo.done).length
  }
}
