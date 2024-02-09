import React, { useContext } from 'react';
import CountContext from '../context/createContext';

const UseContext = () => {
    const { state, dispatch } = useContext(CountContext);

    return (
        <div className='card'>
            <h1>Use Context Counter</h1>
            <p>Your Count is {state.count}.</p>
            <div className='buttons'>
                <button onClick={() => dispatch({type: 'INCREASE', payload: 1})}>+ Increment</button>
                <button onClick={() => dispatch({type: 'DECREASE', payload: -1})}>- Decrement</button>
            </div>
        </div>
    )
}

export default UseContext;