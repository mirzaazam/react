import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <AnotherFunction></AnotherFunction>
      <AnotherFunction></AnotherFunction>
    </div>
  );
}

const style = {
  backgrounColor: 'purple',
  Color: 'green',
  border: '1px solid red',
  margin: '20px'
}

function Person() {
  return (
    <div className='person'>
      <h1>Mirza Azam Nohi</h1>
      <h3>Student</h3>
    </div>
  )
}

function AnotherFunction() {
  return (
    <div className= {style}>
      <h1>Rifat Hossain</h1>
      <h3>Studednt</h3>
    </div>
  )
}

export default App;
