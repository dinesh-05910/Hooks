import React, {useMemo, useState} from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [count2, setcount2] = useState(0);

    
    const isEven = useMemo(()=>{
        console.log("Calculating")
        let i=1;
        while(i<20000000) i++
        return count%2===0
    },[count])

  return (
    <div>
        <div>
            {console.log("rendering - 1")}
            <button onClick={() => setCount(prevState => prevState + 1)}>Count1 - {count}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
           {console.log("rendering - 2")}
           <button onClick={() => setcount2(prevState => prevState + 1)}>Count2 - {count2}</button>
        </div>
    </div>
  )
}

export default UseMemoHook