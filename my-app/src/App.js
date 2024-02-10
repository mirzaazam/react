import logo from './logo.svg';
import './App.css';


function App() {
  const scholars = ['Abdullah Jahangir', 'Abdul Hi Kiyum', 'Ahmadullah', 'Abu Bakar Zakariya', 'Abdur Razzak Bin Yousuf', 'Jamshed Mazumdar'];
  const scholarsJR = [
    { Name: 'Abdullah', profession: 'Teacher', Salary: 30000 },
    { Name: 'Ahmadullah', profession: 'Scholar', Salary: 40000 },
    { Name: 'Jamshed', profession: 'Business', Income: 130000 },
    { Name: 'Razzak', profession: 'Teacher', Salary: 30000 },
    { Name: 'Rafat', profession: 'Student', Tution_fee: 3000 },
    { Name: 'Azam', profession: 'Developer', Salary: 300000 }
  ];
  return (
    <div className="App">

      {/* for single array */}
      {
        scholars.map(scholar => <Person name={scholar}></Person>)

      }

      {/* arary list for test */}
      {
        scholars.map(scholar => <li>{scholar}</li>)
      }

      {/* this for array like Object design in div with props dynamicly */}
      {
        scholarsJR.map((scholarJR) => <PropsAsArrayLikeObject name={scholarJR.Name} profession={scholarJR.profession} Salary={scholarJR.Salary}></PropsAsArrayLikeObject>)
      }

      {/* <Person name={scholars[0]}></Person> */}
      <AnotherFunction></AnotherFunction>
      <AnotherFunction></AnotherFunction>
      <Props name="Nohi" phone="01790-656506" address=" Hatiya-Noakhali"></Props>
      <Props name="Rifat" phone="01518-678458" address=' Dhaka'></Props>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
    </div>
  )
}

function PropsAsArrayLikeObject(props) {
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
      <h3>Salary: {props.Salary}</h3>
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
