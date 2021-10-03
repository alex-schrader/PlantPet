import logo from './logo.svg';
import './App.css';
import plant from '/plant.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img>
        src = {plant}
        </img> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn plantpet
        </a>
        <Exampletext/>
        <Exampletext/>
      </header>
    </div>
  );
}

export default App;
