export const todoReducer = (state = [], action = {}) => {
  
  switch (action.type) {

    case "[payload = todo] add a new TO-DO":
      if(typeof(action.payload) === 'object') {
        return [...state, action.payload];
      }
      else throw new Error('You`re trying to add an invalid TODO, check todo type!');
    
    case "marks as done a todo by id":
      return state.map(todo => action.payload===todo.id? {...todo, done:!todo.done} : todo);
      
    case "delete a todo by id":
      return state.filter(todo => todo.id != action.payload);

    default: return state;
  }

};