import React, {useState} from 'react'
import estiloCSS from '@/pages/components/Counter.module.css'

const Counter = ({setAllCounter}) => {


    const [calculoContador, setCalculoContador] = useState(0)


    const sumar = ()=>{
        const contador1 = setCalculoContador(calculoContador + 1)
        setAllCounter(contador1)
    }
    const restar = ()=>{
        const contador1 = setCalculoContador(calculoContador - 1)
        setAllCounter(contador1)
    }

  return (
    <>
    <button onClick={()=>{sumar()}}
        className={estiloCSS.botonSumar}>+</button>
    <button onClick={()=>{restar()}}
        className={estiloCSS.botonRestar}>-</button>
    </>
  )
}

export default Counter