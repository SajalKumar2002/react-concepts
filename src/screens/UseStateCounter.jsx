import React, { useState } from 'react'

function UseStateCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className='card'>
            <h1>Use State Counter</h1>
            <p>Your Count is {count}.</p>
            <div className='buttons'>
                <button onClick={() => setCount(count + 1)}>+ Increment</button>
                <button onClick={() => setCount(count - 1)}>- Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default UseStateCounter