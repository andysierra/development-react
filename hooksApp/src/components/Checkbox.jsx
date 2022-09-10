import { useEffect, useState } from "react";

const onChangeDef = () => { throw new Error("Checkbox.jsx : onChange prop not defined!"); };

export const Checkbox = ({
  label           = 'nolabel', 
  labelClassName  = '', 
  inputClassName  = '', 
  id              = '', 
  checked         = false, 
  onChange        = onChangeDef
}) => {

  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    onChange(id, isChecked)
  }, [isChecked]);
  

  return (
    <div className="d-flex flex-row justify-content-center mx-3">
        
        {/*Label*/}
        <div>
          <label 
            className = {labelClassName}
            htmlFor   = { id+'_check' }>
              { label } &nbsp;&nbsp;
          </label>
        </div>

        {/*Checkbox*/}
        <div>
          <input 
            type      = "checkbox" 
            className = {inputClassName}
            id        = { id+'_check' } 
            checked   = { isChecked }
            onChange  = { ()=>{ 
              setIsChecked(isChecked => !isChecked);
            } }/>
        </div>

      </div>
  )
}
