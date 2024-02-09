import React, { useReducer } from 'react'

function reducer(state, action) {
  // state: our Value
  // action: in this there are two parameters.
  // 1. type: this is the type of action to be performed.
  // 2. payload: tis is the value.
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'reset':
      return { ...state, count: action.payload }
    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className='card'>
      <h1>UseReducerCounter</h1>
      <p>Your Count is {state.count}.</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+ Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>- Decrement</button>
        <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
      </div>
    </div>
  )
}

export default UseReducerCounter