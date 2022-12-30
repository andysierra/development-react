import { useEffect } from "react"

export const UseHook = (num=0) => {
  
  useEffect(() => {
    console.log("rendering hook")
  }, [])
  
  
  return {
    /* empty */
  }
}
