import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/index'

const UseRedux = ({ count, increment, decrement, reset }) => {
  return (
    <div className='card'>
      <h1>Use Redux Counter</h1>
      <p>Your Count is {count}.</p>
      <div className='buttons'>
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, { increment, decrement, reset })(UseRedux);