import { Action } from "../../../types/global";
import { ToDo } from "../types/toDoTypes";

export const initialState : Array<ToDo> = [];

export const reducer = (state: Array<ToDo>, action:Action) : Array<ToDo> => {

  if(action.type == 'add-todo') {
    let data = action.payload as {title:string, description:string}
    
    let newToDo:ToDo = {
      key           : Date.now(),
      title         : data.title,
      description   : data.description,
      dateCreated   : new Date(),
      dateModified  : new Date(),
      status        : 'pending'
    }
    
    return [...state, newToDo];
  }
  else if (action.type == 'reset') return initialState;

  else return state;
}