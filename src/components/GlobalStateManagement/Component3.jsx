import React, { useContext } from 'react'
import { CountContext } from '../../App'

const Component3 = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component3 - {countContext.ContextCount}
      <button onClick={() => countContext.ContextDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.ContextDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.ContextDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Component3