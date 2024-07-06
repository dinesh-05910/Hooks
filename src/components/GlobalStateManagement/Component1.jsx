import React, { useContext } from 'react'
import { CountContext } from '../../App'


const Component1 = () => {
    const countContext = useContext(CountContext);
  return (
    <div>
        Component 1
        <button onClick={() => countContext.ContextDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.ContextDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.ContextDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Component1