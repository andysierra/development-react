import { useEffect } from "react";
import { Checkbox } from "../components/Checkbox";

const defaultTodoItem = {
  id:           'todoId_0_'+Date.now(),
  description:  'No TODO',
  done:         true
};

const onDoneDef    = (id, done) => { throw new Error("TodoItem.jsx : onDone prop not defined!"); }
const onDeleteDef  = id => { throw new Error("TodoItem.jsx : onDelete prop not defined!"); }

export const TodoItem = ({
  info      = defaultTodoItem, 
  onDone    = onDoneDef, 
  onDelete  = onDeleteDef
}) => {

  useEffect(() => {
    console.log('rerendering')
  }, [info.done])
  

  return (
    <div className="d-flex flex-row justify-content-end align-items-baseline">

      <div className="flex-grow-1">
        <p className={ info.done? 'text-decoration-line-through' : '' }>
          { info.description }
        </p>
      </div>

      <Checkbox 
        label="Done?"
        labelClassName="form-check-label user-select-none cursor-pointer"
        inputClassName="form-check-input pull-left" 
        id={info.id}
        checked={false} 
        onChange={(id, done)=>{ onDone(id,done) }}/>

      <div className="flex-shrink-1">
        <i 
          className="bi bi-x-circle-fill text-danger cursor-pointer"
          onClick={()=>{ onDelete(info.id) }}></i>
      </div>
    </div>
  )
}