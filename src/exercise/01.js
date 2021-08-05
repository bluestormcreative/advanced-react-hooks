// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useReducer } from 'react';

function countReducer(previousCount, newCount) {
  return { count: newCount};
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = useReducer(countReducer, {
    count: initialCount,
  });

  const {count} = state;
  const increment = () => setState({count: count + step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
