import React, {useState} from 'react'

const UseStateHookArray = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    const addCount = (prevCount) => {
        setCount(prevCount + 1); 
    }
    const addList = () => {
        addCount(count);
        setItems([...items,{
            id: items.length,
            value: count
        }])
        console.log(items);
    }
  return (
    <div>
        <button onClick={addList}>Add Number</button>
        <ul>
            {items.map(item => {
                return <li key={item.id}>{item.value}</li>
            })}
        </ul>
    </div>
  )
}

export default UseStateHookArray