import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}



  function Counter() {
    const [count, setCount] = useState(44)
    const increase = () => setCount(count + 1) ;   
  
    return(
      <div>
        <h1>Counter: {count} </h1>
        <button onClick={increase}>increse</button>
        <button>decrese</button>
      </div>
    )
  }

export default App;
