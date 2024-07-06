import React, {useReducer} from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 1
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCount : state.firstCount + action.value}
        case 'decrement':
            return {...state, firstCount: state.firstCount - action.value}
        case 'increment2':
            return {...state, secondCount : state.secondCount + action.value}
        case 'decrement2':
            return {...state, secondCount: state.secondCount - action.value}
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
        <h1>Counter1 - {count.firstCount}</h1>
        <h1>Counter2 - {count.secondCount}</h1>
        
        <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment', value:5})}>IncrementBy5</button>
        <button onClick={() => dispatch({type:'decrement', value:5})}>DecrementBy5</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>

        <div>
           <button onClick={() => dispatch({type:'increment2', value:1})}>Increment</button>
           <button onClick={() => dispatch({type:'decrement2', value:1})}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter2