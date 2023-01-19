import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer';
import { ToDo } from '../types/toDoTypes';

export const useToDo = () => {

  // En este TODO app sencillo, podemos usar un simple reducer,
  // pero en casos de más profundidad de componente, mejor usar context
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteToDo = (id:number) : ToDo => {
    
  }

  return [
    state,
    dispatch,
    deleteToDo
  ] as const;
}
