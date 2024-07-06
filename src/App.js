import './App.css';
import ClsCounter from './components/ClsCounter';
import Hooks from './components/Hooks';
import UseStateHookForm from './components/UseStateHookForm';
import UseStateHookArray from './components/UseStateHookArray';
import UseEffectCounter1 from './components/UseEffectCounter1';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/useContext/ComponentC';
import ComponentA from './components/useContext/ComponentA';
import Counter1 from './components/useReducer/Counter1';
import Counter2 from './components/useReducer/Counter2';
import Component1 from './components/GlobalStateManagement/Component1';
import Component2 from './components/GlobalStateManagement/Component2';
import Component3 from './components/GlobalStateManagement/Component3';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/useReducer/DataFetching2';
import UseMemoHook from './components/UseMemoHook';
import React, {useReducer} from 'react';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0;

const reducer = (state,action) => {        
  switch(action){
      case 'increment':
          return state+1;
      case 'decrement':
          return state-1;
      case 'reset':
          return initialState;
      default:
          return initialState;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer,initialState)   //count & initialState both are same.
  return (
    // <CountContext.Provider value={{ContextCount: count, ContextDispatch: dispatch}}>
    //   <div className="App">
    //     {count}
    //     <Component1/>
    //     <Component2/>
    //     <Component3/>  
    //   {/* <ClsCounter /> */}
    //   {/* <Hooks /> */}
    //   {/* <UseStateHookForm /> */}
    //   {/* <UseStateHookArray /> */}
    //   {/* <UseEffectCounter1 /> */}
    //   {/* <IntervalHookCounter /> */}
    //   {/* <DataFetching /> */}
    //   {/* <UserContext.Provider value={"Dinesh"}>
    //     <ChannelContext.Provider value={"Dinesh Channel"}>
    //       <ComponentA />
    //     </ChannelContext.Provider>
    //   </UserContext.Provider> */}
    //   {/* <Counter1 /> */}
    //   {/* <Counter2 /> */}
    // </div>
    // </CountContext.Provider>
    <div className="App">
      {/* <DataFetching1/>  */}
      {/* <DataFetching2/> */}
      <UseMemoHook />
    </div>
  );
}

export default App;
