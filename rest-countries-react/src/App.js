import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import DataCountries from './Components/LoadData/DataCountries';


function App() {
  return (
    <div className="App">
       <Countries></Countries>
       <Header></Header>
       <Footer></Footer>
       <Nav></Nav>
       <DataCountries></DataCountries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => {
//         setCountries(data)
//         console.log(data)
//       })
//   }, [])
//   return (
//     <div>
//       <h1>Load all countries</h1>
//       <h4>countries length: {countries.length} </h4>
//       {
//         countries.map(country => <Show name={country.name.common} population={country.population}></Show>)
//       }
//     </div>
//   )
// }

// function Show(props) {
//   return(
//     <div>
//       <h1> {props.name} </h1>
//       <h1> {props.population} </h1>
//     </div>
//   )
// }

export default App;
