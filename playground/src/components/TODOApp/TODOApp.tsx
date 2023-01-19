import { Action } from "../../types/global"
import { Add } from "./components/Add"
import { List } from "./components/List"
import { useToDo } from "./hooks/useToDo"

export const TODOApp = () => {

  const [state, dispatch, deleteToDo] = useToDo();

  return (
    <>
      <b className="my-0">Pending: {state.length}, Done: {0}</b>
      <hr className="my-0"/>
      <div className="w-100 d-flex flex-row justify-content-between p-1 gap-1">
        <List className="w-50" list={ state } itemEvents={[ deleteToDo ]}/>
        <Add className="w-50" onAdd={ (action:Action)=>dispatch(action) }/>
      </div>
    </>
  )
}