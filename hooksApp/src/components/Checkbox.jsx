const onChangeDef = () => { throw new Error("Checkbox.jsx : onChange prop not defined!"); };

export const Checkbox = ({ className = '', label = 'nolabel', id = '', checked = false, onChange = onChangeDef }) => {
  return (
    <div className="d-flex flex-row justify-content-center mx-3">
        
        {/*Label*/}
        <div>
          <label 
            className = "form-check-label user-select-none cursor-pointer" 
            htmlFor   = { id+'_check' }>
              { label } &nbsp;&nbsp;
          </label>
        </div>

        {/*Checkbox*/}
        <div>
          <input 
            type      = "checkbox" 
            className = "form-check-input pull-left" 
            id        = { id+'_check' } 
            checked   = { checked }
            onChange  = { ()=>{ onChange(id) } }/>
        </div>

      </div>
  )
}
