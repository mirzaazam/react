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

  return(
    <div>
      <h1> External Users </h1>
      <p>{users.length}</p>
      {
        users.map(user => <ShowDisplay name={user.company.name} email={user.email}></ShowDisplay>)
      }
    </div>
  )
}

function ShowDisplay(props) {
  return(
    <div style={{border: '1px solid purple', margin: '20px'}}>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
    </div>
  )
}


export default App;
