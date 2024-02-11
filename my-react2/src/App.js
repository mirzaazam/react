import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}



function Counter() {
  const [count, setCount] = useState(44)
  const increase = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={increase}>increse</button>
      <button onClick={decrese}>decrese</button>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, []);
}

export default App;
