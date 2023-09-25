import React, { useEffect, useState} from 'react'

const Reloj = () => {


    const [hora, setHora] = useState()

    const [horaMasDiez, setHoraMasDiez] = useState([])

    useEffect(() => {
      const interval = setInterval(() => {
        const fecha = new Date();
        const hora10 = fecha.getMinutes() + 10;

        console.log(hora10)
     

      }, 1000)

      return()=>clearInterval(interval);
    }, [])



  return (
    <>
    {hora}
    {horaMasDiez}
    </>
  )
}

export default Reloj