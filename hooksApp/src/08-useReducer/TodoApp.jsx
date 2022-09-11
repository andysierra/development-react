import { useTodo }  from "../hooks/useTodo"
import { TodoAdd }  from "./TodoAdd";
import { TodoList } from "./TodoList"

export const TodoApp = () => {

  const {todos, sequence, add, doneById, deleteById, completed} = useTodo();

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-center">
        <div className="flex-grow-1 d-flex flex-row justify-content-between align-items-baseline">
          <div><h2>TODO App</h2></div>
          <div>
            <h5>Pendientes: {todos.length-completed}</h5>
            <h5>Completados: {completed}</h5>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
          <TodoList list={ todos } onDone={ doneById } onDelete={ deleteById }/>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
          <h5>Agregue un TODO</h5>
          <TodoAdd onAdd={ add } sequence={sequence}/>
        </div>
      </div>
    </div>
  )
}
