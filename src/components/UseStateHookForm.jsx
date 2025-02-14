import { fireEvent } from '@testing-library/react';
import React, {useState} from 'react'

const UseStateHookForm = () => {
    const [name, setName] = useState({firstName:'',lastName:''});
  return (
    <div>
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
        </form>
        <h2>Hello {name.firstName} {name.lastName}</h2>
    </div>
  )
}

export default UseStateHookForm