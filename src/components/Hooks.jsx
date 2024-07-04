import React from 'react'
import { useState } from 'react';

const Hooks = () => {
    const [count,setCount] = useState(0);
    const incrementCount = (prevCount) => {
        setCount(prevCount+1);
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCount}>IncrementBy1</button>
    </div>
  )
}

export default Hooks