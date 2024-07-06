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
import React from 'react';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClsCounter /> */}
      {/* <Hooks /> */}
      {/* <UseStateHookForm /> */}
      {/* <UseStateHookArray /> */}
      {/* <UseEffectCounter1 /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Dinesh"}>
        <ChannelContext.Provider value={"Dinesh Channel"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <Counter1 />
    </div>
  );
}

export default App;
