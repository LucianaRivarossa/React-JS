import logo from './logo.svg';
import './App.css';

function App() {
  const saludo= () => {
    console.log("hola")

  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
        </p>
       <button className='boton' onClick={saludo}>
        CLICK ME
       </button>
       <p className="parrafo">hola como estas todo eeeeeeee ? </p>
      </header>
    </div>
  );
}

export default App;
