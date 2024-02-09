import React, { createContext, useReducer } from 'react';

const CountContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { count: state.count + action.payload }
        case 'DECREASE':
            return { count: state.count + action.payload }
        default:
            return state;
    }
}

export const CountProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <CountContext.Provider value={{ state: state, dispatch }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContext;