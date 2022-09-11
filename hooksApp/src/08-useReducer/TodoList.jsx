import { TodoItem } from './TodoItem'
import ok_marshmallow from '../../assets/img/ok_marshmallow.jpg';

const onDoneDef    = (id, done) => { throw new Error("TodoItem.jsx : onDone prop not defined!"); }
const onDeleteDef  = id => { throw new Error("TodoItem.jsx : onDelete prop not defined!"); }

export const TodoList = ({
  list      = [], 
  onDone    = onDoneDef, 
  onDelete  = onDeleteDef
}) => {
  return list.length>0 ?
    <ul className="list-group">
      <li className="list-group-item">
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
  :
    <div className="d-flex flex-row justify-content-center align-items-baseline">
      <div className="mx-1">
        <img className="cursor-none" src={ok_marshmallow} alt="ok_marshmallow"/>
      </div>
      <div className="mx-1">
        <p className="display-6 cursor-none">No tienes TODO's</p>
      </div>
    </div>
}
