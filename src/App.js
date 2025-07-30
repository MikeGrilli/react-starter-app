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
        <h1>🎉 Mike's Amazing Counter App!</h1>
        <p>Built with React and deployed automatically via GitHub → Netlify</p>
        <p><strong>Status:</strong> Deployment workflow is working perfectly! 🚀</p>
        <Counter count={count} setCount={setCount} />
      </main>
    </div>
  );
}

export default App;