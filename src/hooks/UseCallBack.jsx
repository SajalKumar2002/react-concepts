// in this code, you will learn a optimization technique called memoization.
// useCallback in react components gets re-rendered very frequently with change with props or state. 
// to avoid that re-rendering we use useCallback hook
// also you will be seeing a parameter passed as an arguement to setCount.

import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    // in increment function we have used count as a dependency to re-create the function.
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count])
    // in decrement function we have used cound as a parameter of the arrow function.
    // it represent previous state values. 'count' as 'prevcount'.
    const decrement = useCallback(() => {
        setCount(prevcount => prevcount - 1);
    }, [])

    const reset = useCallback(() => {
        setCount(0);
    }, [])

    return (
        <div className='card'>
            <h1>Use CallBack Counter</h1>
            <p>Your Count is {count}.</p>
            <div className='buttons'>
                <button onClick={increment}>+ Increment</button>
                <button onClick={decrement}>- Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default UseCallBack