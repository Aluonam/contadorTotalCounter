import React, {useState} from 'react'

const Counter = () => {

    const [calculoContador, setCalculoContador] = useState(0)


  return (
    <>
    {calculoContador}
    <button onClick={()=>{setCalculoContador(calculoContador + 1)}}>+</button>
    <button onClick={()=>{setCalculoContador(calculoContador - 1)}}>-</button>
    </>
  )
}

export default Counter