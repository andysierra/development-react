import { todoReducer } from "../08-useReducer/TodoReducer";
import { useReducer } from "react";

const initialTodo = [
  {
    id:           'todoId_0_'+Date.now(),
    description:  'Ir a la iglesia',
    done:         false
  },
  {
    id:           'todoId_1_'+Date.now(),
    description:  'Ir a hacer mercado',
    done:         true
  },
  {
    id:           'todoId_2_'+Date.now(),
    description:  'Mover el bote en la disco',
    done:         false
  }
];

// actions:
const doneByIdAction    = { type: "marks as done a todo by id" };
const deleteByIdAction  = { type: "delete a todo by id" };

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  
  const doneById    = (id) => dispatch({...doneByIdAction, payload: id});
  const deleteById  = (id) => dispatch({...deleteByIdAction, payload: id});

  return {
    todos,
    doneById,
    deleteById
  }
}
