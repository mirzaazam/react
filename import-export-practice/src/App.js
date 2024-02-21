import logo from './logo.svg';
import './App.css';
import Cosmetices from './Components/Cosmetices/Cosmetices/Cosmetices';
import Api from './Components/Api_Generate/Api';
import ShowApi_json from './Components/Api_data_Show/ShowApi_json';

function App() {
  return (
    <div className="App">
      <Cosmetices></Cosmetices>
      <Api></Api>
      <ShowApi_json></ShowApi_json>
    </div>
  );
}

export default App;
