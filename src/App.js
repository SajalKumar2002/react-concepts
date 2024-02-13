import React from 'react';

import UseStateCounter from './screens/UseStateCounter';
import UseReducerCounter from './screens/UseReducerCounter';
import UseRedux from './screens/UseRedux'
import UseRedux2 from './screens/UseRedux2'
import UseRef from './screens/UseRef';
import UseContext from './screens/UseContext';
import Memo from './screens/Memo';

import { CountProvider } from './context/createContext';
import UseCallBack from './screens/UseCallBack';

export default function App() {
  return (
    <CountProvider>
      <h1 className='heading'>Tutorial for Redux</h1>
      <div className='row'>
        <UseStateCounter />
        <UseReducerCounter />
        <UseRedux />
        <UseRedux2 />
        <UseRef />
        <UseContext />
        <UseCallBack />
        <Memo />
      </div>
    </CountProvider>
  )
}
