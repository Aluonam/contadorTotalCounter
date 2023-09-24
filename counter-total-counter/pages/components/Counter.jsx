import React, {useState} from 'react'
import estiloCSS from '@/pages/components/Counter.module.css'

const Counter = ({calculoContador,setCalculoContador}) => {

    


  return (
    <>
    
    <button onClick={()=>{setCalculoContador(calculoContador + 1)}}
        className={estiloCSS.botonSumar}>+</button>
    <button onClick={()=>{setCalculoContador(calculoContador - 1)}}
        className={estiloCSS.botonRestar}>-</button>
    </>
  )
}

export default Counter