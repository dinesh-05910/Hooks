import React, { useContext } from 'react'
import { CountContext } from '../../App'

const Component2 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
        Component 2
        <button onClick={() => countContext.ContextDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.ContextDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.ContextDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Component2