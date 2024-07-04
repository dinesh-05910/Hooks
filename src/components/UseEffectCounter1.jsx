import React, { useState, useEffect } from 'react'

const UseEffectCounter1 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("Document is updating...");
        document.title = `You clicked ${count} times`
    },[count]);
    // document.title = `You clicked ${count} times`;
  return (
    <div>
        <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
        <h1>You clicked {count} times</h1>
        <button onClick = {() => setCount(count => count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectCounter1