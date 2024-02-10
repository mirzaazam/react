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
      <Props  phone="01790-656506" address=" Hatiya-Noakhali"></Props>
      <Props phone="01518-678458" address = ' Dhaka'></Props>
    </div>
  );
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
    <div className='person'>
      <h1>Rifat Hossain</h1>
      <h3>Student</h3>
    </div>
  )
}

function Props(props) {
  console.log(props);
    return (
    <div className='person'>
        <h3>Name: Mirza Azam</h3>
        <p>Profession: Web Developer</p>
        <p>Phone: {props.phone}</p>
        <p>Adress:{props.address}</p>
    </div>
  )
}
export default App;
