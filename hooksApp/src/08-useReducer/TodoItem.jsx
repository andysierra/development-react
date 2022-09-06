const defaultTodoItem = {
  id:           'todoId_0_'+Date.now(),
  description:  'No TODO',
  done:         true
};

const onDone    = id => { throw new Error("TodoItem.jsx : onDone prop not defined!"); }
const onDelete  = id => { throw new Error("TodoItem.jsx : onDelete prop not defined!"); }

export const TodoItem = ({defaultTodo = defaultTodoItem, onDoneCallback = onDone, onDeleteCallback = onDelete}) => {
  return (
    <div className="d-flex flex-row justify-content-end align-items-baseline">

      <div className="flex-grow-1">
        {
          defaultTodo.done 
          ?
            <h5><del>{ defaultTodo.description }</del></h5>
          :
            <h5>{ defaultTodo.description }</h5>
        }
      </div>

      <div className="d-flex flex-row justify-content-center mx-3">
        <div>
          <label className="form-check-label user-select-none cursor-pointer" htmlFor={defaultTodo.id+'_check'}>Done?&nbsp;&nbsp;</label>
        </div>
        <div>
          <input 
            type="checkbox" 
            className="form-check-input pull-left" 
            id={defaultTodo.id+'_check'} 
            checked={defaultTodo.done}
            onChange={()=>{ onDoneCallback(defaultTodoItem.id) }}/>
        </div>
      </div>

      <div className="flex-shrink-1">
        <i 
          className="bi bi-x-circle-fill text-danger cursor-pointer"
          onClick={()=>{ onDeleteCallback(defaultTodo.id) }}></i>
      </div>
    </div>
  )
}