import React, {useReducer} from 'react'

const initialState = {
    firstCount : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {firstCount : state.firstCount + action.value}
        case 'decrement':
            return {firstCount: state.firstCount - action.value}
        case 'reset':
            return initialState
        default:
            return initialState
    }
}

const Counter2 = () => {
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Counter - {count.firstCount}</h1>
        <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment', value:5})}>IncrementBy5</button>
        <button onClick={() => dispatch({type:'decrement', value:5})}>DecrementBy5</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2