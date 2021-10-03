import logo from './logo.svg';
import './App.css';
import Exampletext from './Exampletext.js'
import plant from './plant.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={plant}/>
        <p>
          Plant Pet
        </p>
        <Exampletext/>
        <Exampletext/>
      </header>
    </div>
  );
}

export default App;
