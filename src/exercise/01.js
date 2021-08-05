// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useReducer } from 'react';

function countReducer(count, step) {
  return count + step;
}

function Counter({initialCount = 0, step = 1}) {
  const [currentState, setState] = useReducer(countReducer, {
    count: initialCount
  });

  const { count } = currentState;
  const increment = () => setState(currentState => ({count: currentState.count + step}));
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
