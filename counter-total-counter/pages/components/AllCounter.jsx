import React, {useState, useEffect} from 'react'
import Counter from './Counter'

const AllCounter = () => {

    const [allCounter, setAllCounter] = useState([])
    const [sumaAllCounter, setSumaAllCounter] = useState(0)

    const showCounters = (num) => {
        const newArr = new Array(num);
        newArr.fill(0);
        return(
            newArr.map((actualElement, index)=>{
                return(
                    <Counter allCounter={allCounter} setAllCounter={setAllCounter} index={index}></Counter>
                )
            })
        )
    }

    useEffect(() => {
      setSumaAllCounter(allCounter.reduce((acumulativo,actual)=>acumulativo + actual, 0))
    }, [allCounter])
    
  return (
    <>
    {sumaAllCounter}
    <br></br>

    {showCounters(4)}
    <br></br>
    </>
  )
}

export default AllCounter