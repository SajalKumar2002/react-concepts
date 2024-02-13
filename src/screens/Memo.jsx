// Memoized Component memoizes the component based on its props.
// It means it won't re-render itself if the same props are passed.
import React from 'react';

// Functional component
const MyComponent = ({ name }) => {
  console.log('Rendering MyComponent');
  return <div>Hello, {name}!</div>;
};

// Wrap MyComponent with React.memo
const MemoizedComponent = React.memo(MyComponent);

// Parent component
const Memo = () => {
  const [name, setName] = React.useState('John');

  const handleClick = () => {
    setName('Jane');
  };

  return (
    <div className='card'>
      <h1>Memo</h1>
      <MemoizedComponent name={name} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Memo;
