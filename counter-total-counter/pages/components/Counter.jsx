import React, {useState} from 'react'
import estiloCSS from '@/pages/components/Counter.module.css'

const Counter = ({allCounter, setAllCounter, index}) => {


    const [calculoContador, setCalculoContador] = useState(0)


    const sumar = ()=>{
        setCalculoContador(calculoContador + 1)
        const copyAll = structuredClone(allCounter)
        copyAll[index] = calculoContador + 1;
        setAllCounter(copyAll)
    }
    const restar = ()=>{
        setCalculoContador(calculoContador - 1)
        const copyAll = structuredClone(allCounter)
        copyAll[index] = calculoContador - 1;
        setAllCounter(copyAll)
    }

  return (
    <>
    {calculoContador}
    <button onClick={()=>{sumar()}}
        className={estiloCSS.botonSumar}>+</button>
    <button onClick={()=>{restar()}}
        className={estiloCSS.botonRestar}>-</button>
    </>
  )
}

export default Counter