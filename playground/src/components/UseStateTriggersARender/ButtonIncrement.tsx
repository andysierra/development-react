import React, { useEffect } from "react"

interface props {
  increment : Function
}

export const ButtonIncrement = React.memo(({ increment }:props) => {
  
  console.log('outside button rendering')

  useEffect(() => {
    console.log('button rendering')
  }, [])
  
  return (
    <button
      className = "btn btn-sm btn-success"
      onClick   = { () => { increment() } }
    >
      setState
    </button>
  )
})