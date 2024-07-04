import React from 'react'
import {useContext} from 'react'
import { UserContext, ChannelContext } from '../../App'


const ComponentC = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
       {user} - {channel} 
    </div>
  )
}

export default ComponentC