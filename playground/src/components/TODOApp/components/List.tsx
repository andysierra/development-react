import { ToDo } from "../types/toDoTypes"
import { Item } from "./Item"

interface props {
  className   : string,
  list        : ToDo[],
  itemEvents  : Array<Function>
}

export const List = ({className="", list=[], itemEvents=[]}:props) => {
  if(list && list.length>0) {
    return (
      <ul className={"list-group "+className} style={{height: '300px', overflowY: 'scroll'}}>
        { list.map((item:ToDo) => <Item key={item.key} toDo={item}/>) }
      </ul>
    )
  }
  else return (
    <h6 className={"display-6 "+className}>Empty</h6>
  );
}