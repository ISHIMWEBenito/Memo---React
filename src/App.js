import React, { useState } from 'react';
import Child from './components/Child';
import './App.css';

function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  function incrementLocal() {
    setLocalNumber((state) => state + 1);
  }

  return (
    <div className='App'>
      <Child number={childNumber} />
      <button onClick={incrementLocal}>Click to increment local</button>
      <h1>local: {localNumber}</h1>
    </div>
  );
}

export default App;
