import { useTodo } from "../hooks/useTodo"
import { TodoList }     from "./TodoList"

export const TodoApp = () => {

  const {todos, doneById, deleteById} = useTodo();

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-center">
        <div className="flex-grow-1 d-flex flex-row justify-content-between align-items-baseline">
          <div><h2>TODO App</h2></div>
          <div><h4>Pendientes:</h4></div>
        </div>
        <div className="flex-grow-1"></div>
        <div className="flex-grow-1"></div>
        
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
          <TodoList list={ todos } onDone={ doneById } onDelete={ deleteById }/>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
          <h5>Agregue un TODO</h5>
          <hr />
        </div>
      </div>
    </div>
  )
}
