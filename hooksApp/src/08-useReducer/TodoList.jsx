import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-active">
        <TodoItem/>
      </li>
    </ul>
  )
}
