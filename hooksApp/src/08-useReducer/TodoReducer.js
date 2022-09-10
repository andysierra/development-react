export const todoReducer = (initialState = [], action = {}) => {
  
  switch (action.type) {

    case "marks as done a todo by id":
      console.log("marks as done a todo by id",action.payload);
      initialState.map(todo => action.payload===todo.id? {...todo, done:!todo.done} : todo);
      return initialState;

    case "delete a todo by id":
      console.log("delete a todo by id",action.payload);
      initialState = initialState.filter(todo => todo.id != action.payload);
      return initialState;
  
    default: return initialState;
  }

};