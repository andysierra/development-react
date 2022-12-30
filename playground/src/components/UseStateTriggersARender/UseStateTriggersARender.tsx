/** 
 * LESSON:
 * 
 * useMemo gives the result
 * useCallback gives the memorized function
 * 
*/

import { useCallback, useEffect, useState } from "react"
import { ButtonIncrement } from "./ButtonIncrement";
import { UseHook } from "./UseHook";

export const UseStateTriggersARender = () => {
    
  const [counter, setCounter] = useState(0);
  const hook                  = UseHook(1997);
  
  console.log("I'm running outside")
  
  useEffect(() => {
    console.log("I'm rendering")
  }, [])
  
  const increment = useCallback(() => {
    setCounter((current) => current + 1);
  }, [])

  return (
    <>
      <h4 className="display-6">{ counter }</h4>
      <ButtonIncrement increment={ increment } />
    </>
  )
}
