import React from 'react';

import { CountProvider } from './context/createContext';

import UseStateCounter from './hooks/UseStateCounter';
import UseReducerCounter from './hooks/UseReducerCounter';
import UseRedux from './hooks/UseRedux'
import UseRedux2 from './hooks/UseRedux2'
import UseRef from './hooks/UseRef';
import UseContext from './hooks/UseContext';
import MemoApi from './hooks/MemoApi';
import UseCallBack from './hooks/UseCallBack';
import UseMemo from './hooks/useMemo';

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
        <MemoApi />
        <UseMemo />
      </div>
    </CountProvider>
  )
}
