import { TodoItem } from "./TodoItem"

const onDoneDef    = (id, done) => { throw new Error("TodoItem.jsx : onDone prop not defined!"); }
const onDeleteDef  = id => { throw new Error("TodoItem.jsx : onDelete prop not defined!"); }

export const TodoList = ({
  list      = [], 
  onDone    = onDoneDef, 
  onDelete  = onDeleteDef
}) => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-active">
        {
          list.map( 
            info => <TodoItem 
                      key       = {info.id}
                      info      = {info}
                      onDone    = { onDone }
                      onDelete  = { onDelete }/> 
          )
        }
      </li>
    </ul>
  )
}
