import { ToDo } from "../types/toDoTypes"

interface Props {
  toDo?: ToDo
}

export const Item = ({ toDo }:Props) => {
  if(toDo) {
    return (
      <div className="d-flex flex-row justify-content-between mb-1 bg-body shadow-lg rounded">
        <div className="d-flex flex-column justify-content-start text-break px-1">
          <b>{toDo.title}</b>
          <small>{toDo.description}</small>
        </div>
        <div className="d-flex flex-column justify-content-center px-1">
          <button className="btn btn-sm btn-danger d-flex flex-row flex-nowrap">
            Done
          </button>
        </div>
      </div>
    );
  }
  else {
    return (  // No Data
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column justify-content-start">
          <b>Empty</b>
          <small>No ToDo data!</small>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button className="btn btn-sm btn-danger">
            <i className="bi bi-check"></i> &nbsp; Done
          </button>
        </div>
      </div>
    );
  }
}