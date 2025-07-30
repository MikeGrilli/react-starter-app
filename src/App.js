import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to React Starter</h1>
        <p>This is a simple React application to get you started.</p>
        <Counter count={count} setCount={setCount} />
      </main>
    </div>
  );
}

export default App;