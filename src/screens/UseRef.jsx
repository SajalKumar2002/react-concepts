import React, { useRef } from 'react'

const UseRef = () => {
  const count = useRef(0);

  const updateCount = (payload) => {
    count.current += payload;
    console.log(count.current);
  };

  return (
    <div className='card'>
      <h1>Use Ref Counter</h1>
      <p>Your Count is {count.current}.</p>
      <div className='buttons'>
        <button onClick={() => updateCount(1)}>+ Increment</button>
        <button onClick={() => updateCount(-1)}>- Decrement</button>
      </div>
    </div>
  );
};

export default UseRef;