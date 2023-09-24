import React, {useState} from 'react'
import estiloCSS from '@/pages/components/Counter.module.css'

const Counter = () => {

    const [calculoContador, setCalculoContador] = useState(0)


  return (
    <>
    {calculoContador}
    <button onClick={()=>{setCalculoContador(calculoContador + 1)}}
        className={estiloCSS.botonSumar}>+</button>
    <button onClick={()=>{setCalculoContador(calculoContador - 1)}}
        className={estiloCSS.botonRestar}>-</button>
    </>
  )
}

export default Counter