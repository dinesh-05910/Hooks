import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (count,action) => {        //count -> CurrentState of Count
    switch(action){
        case 'increment':
            return count+1;
        case 'decrement':
            return count-1;
        case 'reset':
            return initialState;
        default:
            return initialState;
    }
}

const Counter1 = () => {
    const [count, dispatch] = useReducer(reducer,initialState)    //count -> CurrentState of Count
  return (
    <div>
        <h1>Counter - {count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counter1