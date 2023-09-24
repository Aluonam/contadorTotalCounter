import React, {useState} from 'react'
import Counter from './Counter'

const AllCounter = () => {

    const [calculoContador, setCalculoContador] = useState(0)

    
  return (
    <>
    {calculoContador}

    <Counter calculoContador={calculoContador} setCalculoContador={setCalculoContador}></Counter>
    <br></br>
    <Counter calculoContador={calculoContador} setCalculoContador={setCalculoContador}></Counter>
    </>
  )
}

export default AllCounter