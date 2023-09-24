import React, {useState, useEffect} from 'react'
import Counter from './Counter'

const AllCounter = () => {

    const [allCounter, setAllCounter] = useState([])

    
  return (
    <>
    {allCounter}

    <Counter setAllCounter={setAllCounter}></Counter>
    <br></br>
    </>
  )
}

export default AllCounter