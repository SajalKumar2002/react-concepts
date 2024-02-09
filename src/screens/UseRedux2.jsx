import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../actions/index'

const UseRedux = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <h1>Use Redux Counter</h1>
            <p>Your Count is {count}.</p>
            <div className='buttons'>
                <button onClick={() => dispatch(increment())}>+ Increment</button>
                <button onClick={() => dispatch(decrement())}>- Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
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