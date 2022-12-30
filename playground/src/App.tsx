import { UseStateTriggersARender } from "./components/UseStateTriggersARender/UseStateTriggersARender";
import { Padre } from './components/07-tarea-memo/Padre'; 

const App = () => {
  return (
    <div className="container-fluid w-100 h-100">

      <div className="row row-cols-3 p-2">
        <h1 className="display-6">Playground</h1>
      </div>

      <div className="row row-cols-3 g-2 py-2">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-danger p-1 h-100">
            <b>UseStateTriggersARender: No, only running outside</b>
            <p className="p-0 m-0">
              memorized component with React.memo + 
              props frozen with useCallback prevent inner component outside running</p>
            <small className="p-0 m-0">see console</small>
            <UseStateTriggersARender/>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-secondary p-1 h-100">
            <Padre/>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-warning p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-danger p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-secondary p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-warning p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-danger p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-secondary p-1 h-100">
            <p>pez</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div className="bg-warning p-1 h-100">
            <p>pez</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;