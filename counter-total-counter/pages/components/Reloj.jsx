import React, { useEffect, useState} from 'react'

const Reloj = () => {


    const [hora, setHora] = useState()

    useEffect(() => {
      const interval = setInterval(() => {
        const fecha = new Date();
       
        const hora10 = fecha.getMinutes() + 5
        console.log(hora10)

      }, 1000)

      return()=>clearInterval(interval);
    }, [])



  return (
    <>
    {hora}
    </>
  )
}

export default Reloj