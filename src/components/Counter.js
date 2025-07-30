import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
